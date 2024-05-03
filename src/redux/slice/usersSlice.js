import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import users from '../../features/user';

export const getUsers = createAsyncThunk('users/getUsers', async (page) => {
  const getUsers = await users.getUsers(page - 1);
  return getUsers;
});

export const addUser = createAsyncThunk('users/addUser', async (payload) => {
  const res = await users.addUser(payload);
  return res;
});

// Slice cho trạng thái người dùng
const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    loading: false,
    error: null,
    user: null,
  },
  reducers: {
    addNewUser(state) {
      state.loading = true;
      state.user = state.payload;
    },
  },

  extraReducers(builder) {
    builder
      .addCase(getUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    // .addCase(addUser.fulfilled, (state, action) => {
    //   state.users.push(action.payload);
    // });
  },
});

// Export các action creators và reducer
export const { addNewUser } = usersSlice.actions;
export default usersSlice.reducer;
