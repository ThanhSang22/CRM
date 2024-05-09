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
      autoClose: 1500,
    });
  }
});

export const avartarUser = createAsyncThunk('auth/avartarUser', async (file) => {
  const response = await auth.uploadAvartar(file); // Gọi API
  return response;
});

export const getUserLogin = createAsyncThunk('auth/getUserLogin', async () => {
  const response = await auth.getUser(); // Gọi API
  return response;
});

// Slice cho trạng thái người dùng
const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userLogin: null,
    loading: 'ide',
    error: null,
    user: null,
    avatar: null,
  },
  reducers: {
    logoutUser(state) {
      localStorage.removeItem('token');
      state.userLogin = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = 'pending';
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = 'successed';
        state.userLogin = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = 'failed';
        state.error = action.payload;
      })
      .addCase(getUserLogin.fulfilled, (state, action) => {
        state.loading = 'successed';
        state.user = action.payload;
      })
      .addCase(avartarUser.fulfilled, (state, action) => {
        state.loading = 'successed';
        state.avatar = action.payload;
      });
  },
});

// Export các action creators và reducer
export const { logoutUser, users } = authSlice.actions;
export default authSlice.reducer;
