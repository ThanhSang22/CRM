import axiosClient from '../../api/axios-client';

const activities = {
  getActivitiesOfOpportunity: async (id) => await axiosClient.get(`/activities/opportunity/${id}`),
  getActivitiesSchedule: async (id) =>
    await axiosClient.get(`/activities/schedule/${id}?page=0&size=5`),
  getActivitiesAuto: async (id) => await axiosClient.get(`/activities/auto/${id}?page=0&size=5`),
};

export default activities;
