import axiosClient from '../../api/axios-client';

const board = {
  getStage: async () => await axiosClient.get('/stages/all'),
  getOpportunitiesStage: async (id) => await axiosClient.get(`/stages/${id}/opportunities`),
  updateOpp: async (id) => await axiosClient.get(`/opportunities/${id}`),
  getOpportunitiesAll: async () => await axiosClient.get(`opportunities/all`),
};

export default board;
