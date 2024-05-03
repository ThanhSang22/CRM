import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import opportunities from '../../features/opportunities';
import board from '../../features/board/api';

export const getOpportunities = createAsyncThunk('oppotunities/getOpportunities', async (page) => {
  const allOpportunities = await opportunities.getOpportunities(page - 1);
  return allOpportunities;
});

export const getOpportunitiesAll = createAsyncThunk('oppotunities/getOpportunities', async () => {
  const allOpportunities = await board.getOpportunitiesAll();
  return allOpportunities;
});

export const addOpportunity = createAsyncThunk('oppotunities/addOpportunity', async (payload) => {
  const res = await opportunities.addOpportunity(payload);
  return res;
});

export const getAnOpp = createAsyncThunk('oppotunities/addOpportunity', async (id) => {
  const res = await opportunities.getAnOpp(id);
  return res;
});

const opportunitiesSlice = createSlice({
  name: 'opportunities',
  initialState: {
    opportunities: [],
    opportunitiesBoard: [],
    opportunity: null,
    loading: 'idle',
    error: null,
  },
  reducers: {
    addAOpportunity(state, action) {
      state.loading = 'succeeded';
      state.opportunity = action.payload;
    },
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
      });
    // .addCase(addOpportunity.fulfilled, (state, action) => {
    //   state.opportunity = action.payload;
    //   state.opportunities.push(action.payload);
    // });
  },
});

// Export các action creators và reducer
// export const { a } = opportunitiesSlice.actions;
export default opportunitiesSlice.reducer;

// export const selectOpportunityById = (state, opportunityId) =>
//   state.opportunities.opportunities.find((opportunity) => opportunity.id === opportunityId);
