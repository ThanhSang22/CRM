import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../action/auth';

const initialState = {
  token: localStorage.getItem('token') || '',
  error: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: action.payload,
        error: '',
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        token: '',
        error: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        token: '',
        error: '',
      };
    default:
      return state;
  }
};

export default authReducer;
