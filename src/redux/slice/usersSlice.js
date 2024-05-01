import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import users from '../../features/user';

export const getUsers = createAsyncThunk('users/getUsers', async (page, { rejectWithValue }) => {
  try {
    const getUsers = await users.getUsers(page - 1);
    return getUsers;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

// Slice cho trạng thái người dùng
const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {
    getAllUsers(state) {
      state.users = state.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addMatcher(getUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addMatcher(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addMatcher(getUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Export các action creators và reducer
export const { getAllUsers } = usersSlice.actions;
export default usersSlice.reducer;
