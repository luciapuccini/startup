import React from 'react';
import { Route, Switch } from 'react-router-dom';
import {SecureRoute, ImplicitCallback } from '@okta/okta-react';


import App from '../components/App';
import Page404 from '../components/Page404';
import LogIn from '../components/auth/LogIn';
import LogInAccess from '../components/auth/LogInAccess';
import Home from '../containers/Home'
import FindUs from '../components/FindUs';
import SearchMovie from '../containers/SearchMovie';
import MovieDetails from '../containers/MovieDetails';
import Staff from '../components/Staff';




const AppRoutes = () =>
  <App>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/findUs" component={FindUs} />
      <Route path="/logIn" render={() => (
          <LogIn baseUrl="https://dev-445026.oktapreview.com" />
        )}
       />      
       <SecureRoute exact path="/staff" component={Staff}/>
       <SecureRoute exact path="/logInAccess" component={LogInAccess}/>
      <Route exact path="/search" component={SearchMovie} />
      <Route exact path="/movieDetails" component={MovieDetails}/>
      <Route path="/implicit/callback" component={ImplicitCallback} />
      <Route component={Page404} />
    </Switch>
  </App>;

export default AppRoutes;
