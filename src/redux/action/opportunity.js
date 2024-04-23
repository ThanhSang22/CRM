import { SET_TASK_DATA, CLEAR_TASK_DATA, SET_LOADING } from '../constants/opportunityConstants';

export const setTaskData = (taskData) => ({
  type: SET_TASK_DATA,
  payload: taskData,
});

export const clearTaskData = () => ({
  type: CLEAR_TASK_DATA,
});

export const setLoading = (isLoading) => ({
  type: SET_LOADING,
  payload: isLoading,
});
