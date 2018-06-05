
import React, { Component } from 'react';

import GoogleMap from './Map';

class FindUs extends Component {
    state = { lat: -32.927111 , lng: -60.659461 };
    render() {
      const { lat, lng } = this.state;
      return (
        <div>
            <h3>Where to find us?</h3>
          <GoogleMap lat={lat} lng={lng} />
        </div>
    );
  }
}
export default FindUs;
