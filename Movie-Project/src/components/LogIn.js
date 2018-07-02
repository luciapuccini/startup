import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';
import '../utils/css/style.css'

 class LogIn extends Component {
  constructor(props){
    super(props);
    this.state = { authenticated: null };
    this.login= this.login.bind(this);
    this.logout= this.logout.bind(this);
    this.checkAuthentication = this.checkAuthentication.bind(this)
  }
 
  async checkAuthentication()  {
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated });
    }
  };

  async componentDidMount() {
    this.checkAuthentication();
  }

  async componentDidUpdate() {
    this.checkAuthentication();
  }

  async login() {
    this.props.auth.login('/');
  };

  async logout() {
    this.props.auth.logout('/');
  };

  render() {
    if (this.state.authenticated === null) return null;

    const mainContent = this.state.authenticated ? (
      <div>
        <p className="lead">
          You have entered the staff portal,{' '}
          <Link to="/staff">click here</Link>
        </p>
        <button className="btn btn-light btn-lg" onClick={this.logout}>
          Logout
        </button>
      </div>
    ) : (
      <div>
        <p className="lead">
          If you are a staff member, please get your credentials from your
          supervisor
        </p>
        <button className="btn btn-dark btn-lg" onClick={this.login}>
          Login
        </button>
      </div>
    );

    return (
      <div className="jumbotron">
        <h1 className="display-4">Acme Staff Portal</h1>
        {mainContent}
      </div>
    );
  }
  
    
  
}
export default withAuth(LogIn);