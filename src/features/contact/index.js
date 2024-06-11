import axiosClient from '../../api/axios-client';

const contacts = {
  getContacts: async (page) =>
    await axiosClient.get(`/contacts?page=${page}&size=5&sortBy=fullname`),
  // getContacts: async (id) => await axiosClient.get(`/contacts/opportunity/${id}`),
  putContact: async (id, payload) => await axiosClient.put(`/contacts/${id}`, payload),
  addContact: async (id, payload) => await axiosClient.post(`/contacts/opportunity/${id}`, payload),
  getContactOpportunity: async (id, payload) =>
    await axiosClient.get(`/contacts/opportunity/${id}`),
  getAContact: async (id) => await axiosClient.get(`/contacts/${id}`),
};

export default contacts;
