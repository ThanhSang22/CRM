import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import board from '../../features/board/api';
import files from '../../features/files/files';

export const getOpportunitiesAll = createAsyncThunk('bord/getOpportunitiesAll', async () => {
  const allOpportunities = await board.getOpportunitiesAll();
  return allOpportunities;
});

export const uploadFile = createAsyncThunk('bord/uploadFile', async (file) => {
  const res = await files.uploadFile(file);
  return res;
});

export const updateOpp = createAsyncThunk('bord/uploadFile', async (id) => {
  const res = await board.updateOpp(id);
  return res;
});

const boardSlice = createSlice({
  name: 'bord',
  initialState: {
    opportunitiesBoard: [],
    loading: 'idle',
    error: null,
    file: null,
  },
  extraReducers(builder) {
    builder
      .addCase(getOpportunitiesAll.pending, (state) => {
        state.loading = 'pending';
      })
      .addCase(getOpportunitiesAll.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.opportunitiesBoard = action.payload;
      })
      .addCase(getOpportunitiesAll.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.payload;
      })
      .addCase(uploadFile.fulfilled, (state, action) => {
        state.loading = 'succeeded';
        state.file = action.payload;
      });
  },
});

export default boardSlice.reducer;
