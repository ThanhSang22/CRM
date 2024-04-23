import axiosClient from '../../api/axios-client';

const board = {
  getStage: async () => await axiosClient.get('/stages/all'),
  getOpportunitiesStage: async (id) =>
    await axiosClient.get(`/stages/785e4053-9c15-46d1-ad80-809aacf36df2/opportunities`),
};

export default board;
