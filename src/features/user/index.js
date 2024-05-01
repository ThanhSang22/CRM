import axiosClient from '../../api/axios-client';

const users = {
  getUsers: async (page) => await axiosClient.get(`/users?page=${page}&size=5&sortBy=fullname`),
  addUser: async (payload) => await axiosClient.post('/users', payload),
};

export default users;
