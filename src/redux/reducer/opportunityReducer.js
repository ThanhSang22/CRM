import * as types from '../constants/opportunityConstants';

const initialState = {
  opportunities: [],
  loading: false,
  error: '',
};

const opportunityReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case types.FETCH_OPPORTUNITIES:
      return {
        ...state,
        loading: false,
        opportunities: action.payload,
        error: '',
      };
    case types.ADD_OPPORTUNITY:
      return {
        ...state,
        loading: false,
        opportunities: [...state.opportunities, action.payload],
        // newOpportunity: { ...state.newOpportunity },
        error: '',
      };
    default:
      return state;
  }
};

export default opportunityReducer;
