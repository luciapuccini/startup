import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Page404 extends Component {
  render() {
    return (
      <div>
            <h1>Page404</h1>
            <p>
                  <Link to={'/'}> Get Back
                  </Link>
            </p>
      </div>
    );
  }
}

export default Page404;
