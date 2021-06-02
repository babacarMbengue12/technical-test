import {ON_LOGIN, ON_REGISTER, ON_CREATE} from './constants';

export function loginAction(data) {
  return {
    type: ON_LOGIN,
    payload: {
      request: {
        url: `/login`,
        method: 'POST',
        data,
      },
    },
  };
}

export function clearAction() {
  return {
    type: 'ON_CLEAR',
  };
}

export function clear_login_Action() {
  return {
    type: 'ON_CLEAR_LOGIN',
  };
}

export function registerAction(data) {
  return {
    type: ON_REGISTER,
    payload: {
      request: {
        url: `/register`,
        method: 'POST',
        data,
      },
    },
  };
}
export function createAction(data) {
  return {
    type: ON_CREATE,
    payload: {
      request: {
        url: `/users`,
        method: 'POST',
        data,
      },
    },
  };
}
