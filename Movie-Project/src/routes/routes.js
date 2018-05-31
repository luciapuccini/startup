// Dependencies
import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Components
import App from '../components/App';
import Page404 from '../components/Page404';
import LogIn from '../components/LogIn';
import Home from '../containers/Home'
import FindUs from '../components/FindUs';
import SearchMovie from '../containers/SearchMovie';

const AppRoutes = () =>
  <App>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/findUs" component={FindUs} />
      <Route exact path="/logIn" component={LogIn} />
      <Route exact path="/search" component={SearchMovie} />
      <Route component={Page404} />
    </Switch>
  </App>;

export default AppRoutes;
