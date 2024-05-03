import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import auth from '../../features/auth/api';
import { toast } from 'react-toastify';

// Action creator bằng createAsyncThunk để đăng nhập người dùng
export const loginUser = createAsyncThunk('auth/loginUser', async (payload) => {
  try {
    const response = await auth.login(payload); // Gọi API login
    localStorage.setItem('token', response.token); // Lưu token vào localStorage
    return response;
  } catch (error) {
    toast.error('🦄Login Failed: Invalid account', {
      position: 'top-center',
      autoClose: 2000,
    });
  }
});

export const avartarUser = createAsyncThunk('auth/loginUser', async (id) => {
  const response = await auth.avatar(id); // Gọi API
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
    logoutUser(state) {
      localStorage.removeItem('token');
      state.userLogin = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userLogin = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// Export các action creators và reducer
export const { logoutUser, users } = authSlice.actions;
export default authSlice.reducer;
