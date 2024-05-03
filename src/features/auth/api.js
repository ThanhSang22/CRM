import { avatar } from '@material-tailwind/react';
import axiosClient from '../../api/axios-client';

const delay = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

const auth = {
  // login: async (payload) => await axiosClient.post('/api/login', payload),
  login: async (payload) => {
    await delay(1000);
    return await axiosClient.post('/auth/login', payload);
  },
  getUser: async () => await axiosClient.get('/auth/user'),
  changPass: async (payload) => await axiosClient.put('/auth/password', payload),
  resetPass: async (payload) => await axiosClient.put('/auth/reset-password', payload),
};

export default auth;
