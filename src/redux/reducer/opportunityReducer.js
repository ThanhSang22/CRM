// reducer.js
import { SET_TASK_DATA, CLEAR_TASK_DATA, SET_LOADING } from '../constants/opportunityConstants';

const initialState = {
  taskData: {
    name: '',
    email: '',
    phone: '',
    website: '',
    address: '',
    revenue: '',
    stage: '',
    customer: false,
  },
  loading: false,
};

const createOpportunityReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TASK_DATA:
      return {
        ...state,
        taskData: action.payload,
      };
    case CLEAR_TASK_DATA:
      return {
        ...state,
        taskData: initialState.taskData,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default createOpportunityReducer;
