import {ON_GET_USERS} from './constants';

export function getUsersAction() {
  return {
    type: ON_GET_USERS,
    payload: {
      request: {
        url: `/users?per_page=10000`,
      },
    },
  };
}
