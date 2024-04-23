import { createStore, combineReducers, applyMiddleware } from 'redux';
import authReducer from './reducer/authReducer';
import createOpportunityReducer from './reducer/opportunityReducer';
import { thunk } from 'redux-thunk';

const rootReducer = combineReducers({
  auth: authReducer,
  opportunity: createOpportunityReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
