import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import board from '../../features/board/api';

export const getStage = createAsyncThunk(
  'stages/getStage',
  async (stageID, { rejectWithValue }) => {
    try {
      const res = await board.getStage(stageID);
      return res;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

// Slice cho trạng thái người dùng
const stagesSlice = createSlice({
  name: 'stages',
  initialState: {
    stages: [],
    loading: false,
    error: null,
  },
  extraReducers(builder) {
    builder
      .addCase(getStage.pending, (state) => {
        state.loading = true;
        state.error = null;
        console.log('...............................');
      })
      .addCase(getStage.fulfilled, (state, action) => {
        state.loading = false;
        state.stages = action.payload;
      })
      .addCase(getStage.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Export các action creators và reducer
export const { getAllStages } = stagesSlice.actions;
export default stagesSlice.reducer;
