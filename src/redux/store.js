import authReducer from './slice/authSlice';
import usersReducer from './slice/usersSlice';
import contactsReducer from './slice/contactSlice';
import opportunityReducer from './slice/opportunitySlice';
import stagesReducer from './slice/stageSlice';
import boardReducer from './slice/boardSlice';
import activitiesReducer from './slice/activitiesSilce';
import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
    contact: contactsReducer,
    opportunity: opportunityReducer,
    stages: stagesReducer,
    boardReducer: boardReducer,
    activitiesReducer: activitiesReducer,
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), logger],
});

export default store;
