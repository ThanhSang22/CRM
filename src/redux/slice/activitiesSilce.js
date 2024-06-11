import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import activities from '../../features/activities/activities';

export const getActivitiesOfOpportunity = createAsyncThunk(
  'activities/getActivitiesOfOpportunity',
  async (id) => {
    const res = await activities.getActivitiesOfOpportunity(id);
    return res;
  },
);

export const getActivitiesSchedule = createAsyncThunk(
  'activities/getActivitiesSchedule',
  async (id) => {
    const res = await activities.getActivitiesSchedule(id);
    return res;
  },
);

export const getActivitiesAuto = createAsyncThunk('activities/getActivitiesAuto', async (id) => {
  const res = await activities.getActivitiesAuto(id);
  return res;
});

const activitiesSilce = createSlice({
  name: 'activities',
  initialState: {
    activities: [],
    activitiesSchedule: [],
    activitiesAuto: [],
    loading: 'idle',
    error: null,
  },
  extraReducers(builder) {
    builder
      .addCase(getActivitiesOfOpportunity.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(getActivitiesOfOpportunity.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.activities = action.payload;
      })
      .addCase(getActivitiesOfOpportunity.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.payload;
      })
      .addCase(getActivitiesSchedule.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.activitiesSchedule = action.payload;
      })
      .addCase(getActivitiesAuto.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.activitiesAuto = action.payload;
      });
  },
});

export default activitiesSilce.reducer;
