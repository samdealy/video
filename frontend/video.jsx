import React from 'react';
import ReactDOM from 'react-dom';
import configureStore  from './store/store';
import Root from './components/root';

//TODO Delete imports after testing
import { join, login, logout } from './actions/session_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  
  if (window.currentUser) {
    const preloadedState = {
      session: { currentUser: window.currentUser }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  //TODO Delete after testing
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.join     = join;
  window.login    = login;
  window.logout   = logout;

  ReactDOM.render(<Root store={ store }/>, root);
});
