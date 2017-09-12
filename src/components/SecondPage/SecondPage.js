import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './SecondPage.scss';

export default class SecondPage extends Component {
  render () {
    return (
      <div>
        <h1 className='display-1 text-center'>This is the second page</h1>
        <h2 className='display-2 text-center'>Select next page</h2>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 text-center'>
              <Link to='/'>Home</Link>
            </div>
            <div className='col-lg-6 text-center'>
              <Link to='/first-page'>First page</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
