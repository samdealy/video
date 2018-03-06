import React from 'react';
import ReactDOM from 'react-dom';
import configureStore  from './store/store';

//TODO Delete imports after testing
import { join, login, logout } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();

  //TODO Delete after testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.join     = join;
  window.login    = login;
  window.logout   = logout;

  ReactDOM.render(<h1>Welcome to Video</h1>, root);
});
