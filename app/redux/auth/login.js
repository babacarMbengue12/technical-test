import {ON_LOGIN_SUCCESS, ON_LOGIN, ON_LOGIN_FAIL} from './constants';

export default (state = {}, action = {}) => {
  switch (action.type) {
    case ON_LOGIN:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case 'ON_CLEAR_LOGIN':
      return {
        ...state,
        error: false,
        success: false,
        message: null,
      };
    case ON_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case ON_LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        error: true,
        message: action.error.response.data?.error || 'error when login in',
      };
    default:
      return {
        ...state,
        loading: false,
        error: false,
      };
  }
};
