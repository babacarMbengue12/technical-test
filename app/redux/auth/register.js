import {ON_REGISTER, ON_REGISTER_SUCCESS, ON_REGISTER_FAIL} from './constants';

export default (state = {}, action = {}) => {
  switch (action.type) {
    case ON_REGISTER:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case 'ON_CLEAR':
      return {
        ...state,
        error: false,
        success: false,
        message: null,
      };
    case ON_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data,
      };
    case ON_REGISTER_FAIL:
      return {
        ...state,
        loading: false,
        error: true,
        message: action.error.response.data.error,
      };
    default:
      return {
        ...state,
        error: false,
        loading: false,
      };
  }
};
