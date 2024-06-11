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

export const editUser = createAsyncThunk('users/editUser', async (payload) => {
  const res = await users.putAUser(payload);
  return res;
});

export const getaUser = createAsyncThunk('users/getAUser', async (id) => {
  const res = await users.getAUser(id);
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
      })
      .addCase(getaUser.fulfilled, (state, action) => {
        state.loading = true;
        state.user = action.payload;
      })
      .addCase(editUser.fulfilled, (state, action) => {
        state.loading = true;
        state.user = action.payload;
      });
    // .addCase(addUser.fulfilled, (state, action) => {
    //   state.loading = true;
    //   state.user = action.payload;
    // });
  },
});

// Export các action creators và reducer
// export const { addNewUser, aUser } = usersSlice.actions;
export default usersSlice.reducer;
