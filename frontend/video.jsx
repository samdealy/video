import React from 'react';
import ReactDOM from 'react-dom';
import configureStore  from './store/store';
import Root from './components/root';
import { fetchSearch } from './actions/search_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;

  if (window.currentUser) {
    const { id } = window.currentUser;
    const preloadedState = {
      session: { currentUserId: id },
      entities: { users: {[window.currentUser.id]: window.currentUser}}
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  ReactDOM.render(<Root store={ store }/>, root);
});
