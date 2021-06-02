import React from 'react';
import {applyMiddleware, createStore} from 'redux';
import {Provider as ReduxProvider} from 'react-redux';
import axiosMiddleware from 'redux-axios-middleware';
import root from './root';
import axios from 'axios';
const client = axios.create({
  baseURL: 'https://reqres.in/api',
  responseType: 'json',
});

const store = createStore(root, applyMiddleware(axiosMiddleware(client)));
const Provider = ({children}) => {
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
};

export default Provider;
