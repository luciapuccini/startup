import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../utils/css/style.css';

class Footer extends Component {
	static propTypes = {
    copyright: PropTypes.string
  };

  render() {
  	const { copyright = '&copy; Lucia Puccini 2018' } = this.props;

    return (
      <div className="Footer">
        <p dangerouslySetInnerHTML={{ __html: copyright }} />
      </div>
    );
  }
}

export default Footer;
