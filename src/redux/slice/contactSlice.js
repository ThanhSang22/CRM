import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import contact from '../../features/contact';

export const getContacts = createAsyncThunk('contacts/getContacts', (page) => {
  const res = contact.getContacts(page - 1);
  return res;
});

export const editContact = createAsyncThunk('contacts/editContact', (id) => {
  const res = contact.putContact(id);
  return res;
});

export const getAContact = createAsyncThunk('contacts/getAContact', (id) => {
  const res = contact.getAContact(id);
  return res;
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
    contactUpdate(state, action) {
      const { id, firstname, lastname, fullname, email, phone, birthday, gender, jobPosition } =
        action.payload;
      const existingContact = state.contacts.find((contact) => contact.id === id);
      if (existingContact) {
        existingContact.firstname = firstname;
        existingContact.lastname = lastname;
        existingContact.fullname = fullname;
        existingContact.email = email;
        existingContact.phone = phone;
        existingContact.birthday = birthday;
        existingContact.gender = gender;
        existingContact.jobPosition = jobPosition;
      }
    },
  },
  extraReducers(builder) {
    builder
      .addCase(getContacts.pending, (state) => {
        state.loading = 'pending';
        state.error = null;
      })
      .addCase(getContacts.fulfilled, (state, action) => {
        state.loading = 'success';
        state.contacts = action.payload;
      })
      .addCase(getContacts.rejected, (state, action) => {
        state.loading = 'fail';
        state.error = action.payload;
      });
  },
});

// Export các action creators và reducer
// export const { getAllContacts } = contactsSlice.actions;
export default contactsSlice.reducer;

export const selectContactById = (state, contactId) =>
  state.contacts.contacts.find((contact) => contact.id === contactId);
