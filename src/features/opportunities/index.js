import axiosClient from '../../api/axios-client';

const opportunities = {
  // getOpportunities: async () => await axiosClient.get('/opportunities/all'),
  getOpportunities: async (page) =>
    await axiosClient.get(`/opportunities?page=${page}&size=5&sortBy=name`),
  addOpportunity: async (payload) => await axiosClient.post(`/opportunities`, payload),
  getAnOpp: async (id) => await axiosClient.get(`/opportunities/${id}`),
};

export default opportunities;
