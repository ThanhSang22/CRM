import axiosClient from '../../api/axios-client';

const auth = {
  // login: async (payload) => await axiosClient.post('/api/login', payload),
  login: async (payload) => await axiosClient.post('/auth/login', payload),
  getUser: async () => await axiosClient.get('/auth/user'),
};

export default auth;
