import {
  ON_GET_RESOURCES,
  ON_GET_RESOURCES_FAIL,
  ON_GET_RESOURCES_SUCCESS,
} from './constants';

export default (state = {}, action = {}) => {
  switch (action.type) {
    case ON_GET_RESOURCES:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case ON_GET_RESOURCES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        data: action.payload.data.data,
      };
    case ON_GET_RESOURCES_FAIL:
      return {
        ...state,
        loading: false,
        error: true,
        message: 'erreur lors de la récupération des données',
      };

    default:
      return {
        ...state,
        error: false,
        loading: false,
      };
  }
};
