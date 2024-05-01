import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import auth from '../../features/auth/api';

// Action creator bằng createAsyncThunk để đăng nhập người dùng
export const loginUser = createAsyncThunk('auth/loginUser', async (payload) => {
  const response = await auth.login(payload); // Gọi API login
  localStorage.setItem('token', response.token); // Lưu token vào localStorage
  return response;
});

// Slice cho trạng thái người dùng
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userLogin: null,
    loading: false,
    error: null,
  },
  reducers: {
    // login(state, action) {
    //   state.userLogin = action.payload;
    // },
    logoutUser(state) {
      localStorage.removeItem('token');
      state.userLogin = null;
    },
  },
  extraReducers(builder) {
    builder
      .addMatcher(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addMatcher(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userLogin = action.payload;
      })
      .addMatcher(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Export các action creators và reducer
export const { logoutUser, users } = authSlice.actions;
export default authSlice.reducer;
