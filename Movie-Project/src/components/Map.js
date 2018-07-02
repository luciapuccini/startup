import React, { Component } from 'react';

export default class GoogleMap extends Component {
  shouldComponentUpdate() {
    return false;
  }

  componentWillReceiveProps(nextProps) {
    this.map.panTo({ lat: nextProps.lat, lng: nextProps.lng });
  }

  componentDidMount() {
    this.map = new global.google.maps.Map(this.refs.map, {
      center: { lat: this.props.lat, lng: this.props.lng },
      zoom: 15
    });
  }
  render() {
    return <div style={{ height: '50vh' }} ref="map" />;
  }
}
