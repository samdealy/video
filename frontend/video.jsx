import React from 'react';
import ReactDOM from 'react-dom';
import configureStore  from './store/store';
import Root from './components/root';

//TODO Delete imports after testing


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

  //TODO Delete after testing
    window.getState = store.getState;
    window.dispatch = store.dispatch;


  ReactDOM.render(<Root store={ store }/>, root);
});
// session: { currentUser: {id} }
