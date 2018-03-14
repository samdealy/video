import React from 'react';
import ReactDOM from 'react-dom';
import configureStore  from './store/store';
import Root from './components/root';

//TODO Delete imports after testing
import { fetchFeedVideos, fetchMyVideos } from './actions/video_actions';

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
    window.fetchFeedVideos = fetchFeedVideos;
    window.fetchMyVideos = fetchMyVideos;

  ReactDOM.render(<Root store={ store }/>, root);
});
// session: { currentUser: {id} }
