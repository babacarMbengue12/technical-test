import {combineReducers} from 'redux';
import login from './auth/login';
import register from './auth/register';
import resources from './resources/resources';
import users from './users/users';
import create from './auth/create';

export default combineReducers({
  login,
  register,
  users,
  resources,
  create,
});
