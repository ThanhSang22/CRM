import * as types from '../constants/opportunityConstants';
import opportunities from '../../features/opportunities';

export const fetchOpportunitiesSuccess = (opportunities) => ({
  type: types.FETCH_OPPORTUNITIES,
  payload: opportunities,
});

export const fetchOpportunities = (page) => {
  return async (dispatch) => {
    try {
      const res = await opportunities.getOpportunities(page - 1);
      dispatch(fetchOpportunitiesSuccess(res));
    } catch (error) {
      console.error('Error get opportunity:', error);
    }
  };
};

export const addOpportunitySuccess = (opportunity) => ({
  type: types.ADD_OPPORTUNITY,
  payload: opportunity,
});

export const setLoading = (isLoading) => ({
  type: types.SET_LOADING,
  payload: isLoading,
});

export const addOpportunity = (newOpportunity) => {
  return async (dispatch) => {
    try {
      const addedOpportunity = await opportunities.addOpportunity(newOpportunity);
      dispatch(addOpportunitySuccess(addedOpportunity));
    } catch (error) {
      console.error('Error adding opportunity:', error);
    }
  };
};
