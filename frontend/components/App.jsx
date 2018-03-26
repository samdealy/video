import React from 'react';
import { Route } from 'react-router';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

import NavBarContainer from './nav_bar/nav_bar_container.js';
import Footer from './footer/footer';
import LogInFormContainer from './join_login/login_form_container';
import JoinFormContainer from './join_login/join_form_container';
import WelcomePageContainer from './welcome_page/welcome_page_container';
import UploadPageContainer from './upload/upload_page_container';
import SettingsPageContainer from './settings/settings_page_container';
import WatchPage from './watch/watch_page';
import HomePageContainer from './home/home_page_container.jsx';

const App = () => (
  <div>
    <div id="color-ribbon"></div>
    <NavBarContainer />
    <AuthRoute exact path='/' component={WelcomePageContainer} />
    <AuthRoute exact path="/log_in" component={LogInFormContainer} />
    <AuthRoute exact path="/join" component={JoinFormContainer} />
    <ProtectedRoute exact path='/upload' component={UploadPageContainer} />
    <ProtectedRoute exact path='/watch/:videoId' component={WatchPage} />
    <ProtectedRoute exact path='/:videoId/settings' component={SettingsPageContainer} />
    <ProtectedRoute exact path='/home' component={HomePageContainer} />
    <ProtectedRoute exact path='/home/myvideos' component={HomePageContainer} />
    <ProtectedRoute Footer component={Footer} />
  </div>
);

export default App;
