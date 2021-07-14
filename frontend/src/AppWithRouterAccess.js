import React from 'react';
import { Route, useHistory, Switch } from 'react-router-dom';
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';
import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js';

import { oktaAuthConfig, oktaSignInConfig } from './config';


import Home from "./Components/Home";
import BlogDetail from "./Components/BlogDetail";
import Compose from "./Components/Compose";
import Login from './Components/account/Login';

const oktaAuth = new OktaAuth(oktaAuthConfig);

function AppWithRouterAccess() {

    const history = useHistory();

    const customAuthHandler = () => {
        history.push('/login');
    };
  
    const restoreOriginalUri = async (_oktaAuth, originalUri) => {
        history.replace(toRelativeUrl(originalUri, window.location.origin));
    };

    return (
        <Security
        oktaAuth={oktaAuth}
        onAuthRequired={customAuthHandler}
        restoreOriginalUri={restoreOriginalUri} >
        <Switch>
            <SecureRoute exact path="/" component={Home} />

            <Route path='/login' render={() => <Login config={oktaSignInConfig} />} />
            <Route path='/login/callback' component={LoginCallback} />

            <Route exact path= "/detail/:id" component={BlogDetail} />
            <Route exact path="/create" component={Compose} />
        </Switch>
        </Security>
    );
}

export default AppWithRouterAccess;
