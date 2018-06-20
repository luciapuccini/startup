import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import AppRoutes from './routes/routes';
import { Security } from '@okta/okta-react';

import registerServiceWorker from './registerServiceWorker';
import store from './store';

function onAuthRequired({ history }) {
  history.push('/logIn');
}
render(
  <Provider store={store}>
    <Router>
    <Security
          issuer="https://dev-445026.oktapreview.com/oauth2/default"
          client_id="0oafin631ubK0WW1H0h7"
          redirect_uri={window.location.origin + '/implicit/callback'}
          onAuthRequired={onAuthRequired}
        >
        
        <AppRoutes />

      </Security>
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();