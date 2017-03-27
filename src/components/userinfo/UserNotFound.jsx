import React, { Component } from 'react';
import './UserNotFound.css';

export default class UserNotFound extends Component {
  render() {
    return (
      <div>
        <div className="d-flex justify-content-center">
          <div className="container-fluid">
            <p className="error-title">404</p>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="container-fluid">
            <p className="error-description">Ops, User not found. Try again.</p>
          </div>
        </div>
      </div>
    );
  }
}