import React, { Component } from 'react';
import './UserProfile.css';

export default class UserProfile extends Component {
  render() {
    const { user } = this.props;
    const { avatar_url, email, followers, following, html_url, login, name } = user;

    return (
      <div className="padding-top">
        <div className="d-flex justify-content-center">
          <img alt="avatar" className="avatar rounded-circle" src={avatar_url} />
        </div>

        <div className="d-flex justify-content-center">
          <h3>{login}</h3>
        </div>

        <div className="d-flex justify-content-center">
          <h6>{`Name: ${name}`}</h6>
        </div>

        <div className="d-flex justify-content-center">
          <h6>{`Email: ${email ? email : ''}`}</h6>
        </div>

        <div className="d-flex justify-content-center">
          <h6>{`Followers: ${followers} / Following: ${following}`}</h6>
        </div>

        <div className="d-flex justify-content-center">
          <p><a className="text text-default" href={html_url} role="button"> View Details </a></p>
        </div>
      </div>
    );
  }
}

//WellingtonCosta