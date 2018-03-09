import React from 'react';
import { Route } from 'react-router';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NavBarContainer from './nav_bar/nav_bar_container.js';
// import Footer from './footer/footer.js';
import LogInFormContainer from './session_form/login_form_container';
import JoinFormContainer from './session_form/join_form_container';
import WelcomePageContainer from './welcome_page/welcome_page_container';
import UploadPageContainer from './upload/upload_page_container';
import SettingsPageContainer from './settings/settings_page_container';
import { logout } from '../actions/session_actions';

const App = () => (
  <div>
    <div id="color-ribbon"></div>
    <NavBarContainer />
    <AuthRoute exact path='/' component={WelcomePageContainer} />
    <AuthRoute exact path="/log_in" component={LogInFormContainer} />
    <AuthRoute exact path="/join" component={JoinFormContainer} />
    <ProtectedRoute exact path='/upload' component={UploadPageContainer} />
    <ProtectedRoute exact path='/:videoId/settings' component={SettingsPageContainer} />
  </div>
);

export default App;

//TODO Place the footer in here
