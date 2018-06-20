import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import OktaSignIn from '@okta/okta-signin-widget';
import '@okta/okta-signin-widget/dist/css/okta-sign-in.min.css';
import '@okta/okta-signin-widget/dist/css/okta-theme.css';

class SignInWidget extends Component {
  componentDidMount() {
    const el = ReactDOM.findDOMNode(this);
    this.widget = new OktaSignIn({
      baseUrl: this.props.baseUrl,
      
    });
    this.widget.renderEl({ el }, this.props.onSuccess, this.props.onError);
  }

  componentWillUnmount() {
    this.widget.remove();
  }

  render() {
    const test = 
    <div className="alert alert-warning" >
      
      <h4>Test User: </h4>
      <p>User name: dcav.3as.pl@gmail.com</p>
      <p>User password: Test1234</p>
    </div>
    return (
      <div>
        {test}
      </div >);
  }
}

export default SignInWidget;
