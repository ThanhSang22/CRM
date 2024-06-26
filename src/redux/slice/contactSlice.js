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

export const addContact = createAsyncThunk('contacts/addContact', (id, payload) => {
  const res = contact.addContact(id, payload);
  return res;
});

export const getContactOpportunity = createAsyncThunk('contacts/getContactOpportunity', (id) => {
  const res = contact.getContactOpportunity(id);
  return res;
});

// Slice cho trạng thái người dùng
const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    contact: null,
    contactOpportunity: null,
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
      })
      .addCase(getAContact.fulfilled, (state, action) => {
        state.loading = 'success';
        state.contact = action.payload;
      })
      .addCase(editContact.fulfilled, (state, action) => {
        state.loading = 'success';
        state.contact = action.payload;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.loading = 'success';
        state.contact = action.payload;
      })
      .addCase(getContactOpportunity.fulfilled, (state, action) => {
        state.loading = 'success';
        state.contactOpportunity = action.payload;
      });
  },
});

// Export các action creators và reducer
export const { contactUpdate } = contactsSlice.actions;
export default contactsSlice.reducer;
