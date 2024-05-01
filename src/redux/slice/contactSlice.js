import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import contact from '../../features/contact';

export const getContacts = createAsyncThunk('contacts/getContacts', (page, { rejectWithValue }) => {
  try {
    const res = contact.getContacts(page - 1);
    return res;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

// Slice cho trạng thái người dùng
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    loading: 'idle',
    error: null,
  },
  reducers: {
    getAllContacts(state) {
      state.contacts = state.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addMatcher(getContacts.pending, (state) => {
        state.loading = 'pending';
        state.error = null;
      })
      .addMatcher(getContacts.fulfilled, (state, action) => {
        state.loading = 'success';
        state.contacts = action.payload;
      })
      .addMatcher(getContacts.rejected, (state, action) => {
        state.loading = 'fail';
        state.error = action.payload;
      });
  },
});

// Export các action creators và reducer
export const { getAllContacts } = contactsSlice.actions;
export default contactsSlice.reducer;
