import axiosClient from '../../api/axios-client';

const Mails = {
  sendQuotation: async (id) => await axiosClient.get(`/mails/quotation/opportunity/${id}`),
};

export default Mails;
