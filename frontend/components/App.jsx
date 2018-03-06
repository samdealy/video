import React from 'react';
import { Route } from 'react-router';
import { AuthRoute } from '../util/route_util';
import LogInFormContainer from './session_form/login_form_container';
import JoinFormContainer from './session_form/join_form_container';
import { logout } from '../actions/session_actions';


const App = () => (
  <div>
    <h1>Vimeo</h1>
    <AuthRoute exact path="/log_in" component={LogInFormContainer} />
    <AuthRoute exact path="/join" component={JoinFormContainer} />
  </div>
);

export default App;

//TODO Delete this delete button when you make the navbar!
