import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../action/auth';

const initialState = {
  token: localStorage.getItem('token') || '',
  user: {
    id: '',
    firstname: '',
    lastname: '',
    fullname: '',
    email: '',
    phone: '',
    birthday: '',
    gender: '',
    username: '',
    roles: [],
    avatar: {
      id: '',
      name: '',
      type: '',
      physicalPath: '',
      is_template: false,
    },
  },
  error: '',
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
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
        token: localStorage.removeItem('token'),
        error: '',
      };
    default:
      return state;
  }
};

export default authReducer;
