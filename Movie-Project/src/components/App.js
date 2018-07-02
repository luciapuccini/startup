import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Security } from '@okta/okta-react';
import items from '../data/menu';
import Header from './Global/Header';
import Content from './Global/Content';
import Footer from './Global/Footer';

function onAuthRequired({ history }) {
  history.push('/logIn');
}

class App extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired
  };

  render() {
    const { children } = this.props;

    return (
     
      <Security
          issuer="https://dev-445026.oktapreview.com/oauth2/default"
          client_id="0oafin631ubK0WW1H0h7"
          redirect_uri={window.location.origin + '/implicit/callback'}
          onAuthRequired={onAuthRequired}
        >
         <div className="App">
            <Header
              title="Movie Project App"
              items={items}
            />
            <Content body={children}  />
            <Footer />
          </div>
        </Security >
      
    );
  }
}

export default App;
