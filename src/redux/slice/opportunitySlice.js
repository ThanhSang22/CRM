import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import opportunities from '../../features/opportunities';

export const getOpportunities = createAsyncThunk(
  'oppotunities/getOpportunities',
  async (page, { rejectWithValue }) => {
    try {
      const allOpportunities = await opportunities.getOpportunities(page - 1);
      return allOpportunities;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

export const addOpportunity = createAsyncThunk(
  'oppotunities/addOpportunity',
  async (payload, { rejectWithValue }) => {
    try {
      const res = await opportunities.addOpportunity(payload);
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const opportunitiesSlice = createSlice({
  name: 'opportunities',
  initialState: {
    opportunities: [],
    opportunity: null,
    loading: false,
    error: null,
  },

  reducers: {
    getAllOpportunities(state, action) {
      state.opportunities = action.payload;
    },
    addAOpportunity(state, action) {
      state.opportunity = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addMatcher(getOpportunities.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addMatcher(getOpportunities.fulfilled, (state, action) => {
        state.loading = false;
        state.opportunities = action.payload;
        state.opportunity = null;
      })
      .addMatcher(getOpportunities.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addMatcher(addOpportunity.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addMatcher(addOpportunity.fulfilled, (state, action) => {
        state.loading = false;
        state.opportunity = action.payload;
      })
      .addMatcher(addOpportunity.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Export các action creators và reducer
export const { getAllOpportunities, addAOpportunity } = opportunitiesSlice.actions;
export default opportunitiesSlice.reducer;
