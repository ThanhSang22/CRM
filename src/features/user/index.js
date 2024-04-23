import axiosClient from '../../api/axios-client';

const users = {
  getUsers: async (page) => await axiosClient.get(`/users?page=${page}&size=5&sortBy=fullname`),
};

export default users;
