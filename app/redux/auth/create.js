import {ON_CREATE_SUCCESS, ON_CREATE_FAIL, ON_CREATE} from './constants';

export default (state = {}, action = {}) => {
  switch (action.type) {
    case ON_CREATE:
      return {
        ...state,
        loading: true,
        error: false,
        success: false,
      };
    case ON_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        success: true,
        message: 'data added successfully',
        data: action.payload.data,
      };
    case ON_CREATE_FAIL:
      return {
        ...state,
        loading: false,
        error: true,
        success: false,
        message: action.error.response?.data?.error || 'Error when adding data',
      };
    default:
      return {
        ...state,
        error: false,
        loading: false,
        success: false,
      };
  }
};
