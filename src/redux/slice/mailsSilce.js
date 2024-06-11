import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import activities from '../../features/activities/activities';
import Mails from '../../features/mails/mails';

export const sendQuotation = createAsyncThunk('mails/sendQuotation', async (id) => {
  const res = await Mails.sendQuotation(id);
  return res;
});

const activitiesSilce = createSlice({
  name: 'mail',
  initialState: {
    mails: [],
    loading: 'idle',
    error: null,
  },
  extraReducers(builder) {
    builder
      .addCase(sendQuotation.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(sendQuotation.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.activities = action.payload;
      })
      .addCase(sendQuotation.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.payload;
      });
  },
});

export default activitiesSilce.reducer;
