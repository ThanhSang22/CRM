import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import opportunities from '../../features/opportunities';

export const getOpportunities = createAsyncThunk('oppotunities/getOpportunities', async (page) => {
  const allOpportunities = await opportunities.getOpportunities(page - 1);
  return allOpportunities;
});

export const addOpportunity = createAsyncThunk('oppotunities/addOpportunity', async (payload) => {
  const res = await opportunities.addOpportunity(payload);
  return res;
});

export const getAnOpp = createAsyncThunk('oppotunities/getAnOpp', async (id) => {
  const res = await opportunities.getAnOpp(id);
  return res;
});

export const importOpp = createAsyncThunk('oppotunities/importOpportunity', async (file) => {
  const res = await opportunities.importOpp(file);
  return res;
});

const opportunitiesSlice = createSlice({
  name: 'opportunities',
  initialState: {
    opportunities: [],
    opportunitiesImport: [],
    opportunity: null,
    loading: 'idle',
    error: null,
  },
  extraReducers(builder) {
    builder
      .addCase(getOpportunities.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(getOpportunities.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.opportunities = action.payload;
      })
      .addCase(getOpportunities.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.payload;
      })
      .addCase(getAnOpp.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.opportunity = action.payload;
      })
      .addCase(importOpp.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.opportunities.concat(action.payload);
        state.opportunitiesImport = action.meta.arg;
      });
  },
});

// Export các action creators và reducer
export const { getAll } = opportunitiesSlice.actions;
export default opportunitiesSlice.reducer;

// export const selectOpportunityById = (state, opportunityId) =>
//   state.opportunities.opportunities.find((opportunity) => opportunity.id === opportunityId);
