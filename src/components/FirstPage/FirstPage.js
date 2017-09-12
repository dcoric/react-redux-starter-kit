import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './FirstPage.scss';

export default class FirstPage extends Component {
  render () {
    return (
      <div>
        <h1 className='display-1 text-center'>This is the first page</h1>
        <h2 className='display-2 text-center'>Select next page</h2>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6 text-center'>
              <Link to='/'>Home</Link>
            </div>
            <div className='col-lg-6 text-center'>
              <Link to='/second-page'>Second page</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
