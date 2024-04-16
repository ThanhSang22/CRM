import axiosClient from '../../api/axios-client';

const opportunity = {
  // login: async (payload) => await axiosClient.post('/api/login', payload),
  opportunities: async (payload) => await axiosClient.get('/opportunities/all'),
};

export default opportunity;
