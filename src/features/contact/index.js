import axiosClient from '../../api/axios-client';

const contacts = {
  getContacts: async (page) =>
    await axiosClient.get(`/contacts?page=${page}&size=5&sortBy=fullname`),
  // getContacts: async (id) => await axiosClient.get(`/contacts/opportunity/${id}`),
};

export default contacts;
