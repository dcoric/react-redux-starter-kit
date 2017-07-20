import React, { Component } from 'react';
import {connect} from 'react-redux';
import './Welcome.scss';
import LOGO_IMAGE from '../../images/react-logo.png';

import * as actions from '../../actions';

class Welcome extends Component {
  render () {
    return (
      <div>
        <h1 className='display-1 text-center'>Welcome to</h1>
        <img
          className='logo mh-100'
          src={LOGO_IMAGE} onClick={() => this.props.apiUrl()} />
      </div>
    );
  }
}

export default connect(null, actions)(Welcome);
