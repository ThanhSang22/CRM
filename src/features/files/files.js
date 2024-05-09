import axiosClient from '../../api/axios-client';

const files = {
  uploadFile: async (file) => await axiosClient.post(`/files`, file),
  getFile: async (id) => await axiosClient.post(`/files/download/${id}`),
};

export default files;
