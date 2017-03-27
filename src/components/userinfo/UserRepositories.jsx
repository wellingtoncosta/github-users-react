import React, { Component } from 'react';

export default class UserRepositories extends Component {

  mapRepositories = (repository) => {
    const { description, id, html_url, language, name, stargazers_count } = repository;

    console.log(repository);

    return (
      <a key={id} href={html_url} className="list-group-item list-group-item-action flex-column align-items-start">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">{name}</h5>
          <small>{`${stargazers_count} stars`}</small>
        </div>
        <p className="mb-1">{description ? description : 'No description'}</p>
        <small>{language}</small>
      </a>
    );
  }

  render() {
    const { repositories } = this.props;
    const items = repositories.map(this.mapRepositories);

    return (
      <div className="list-group padding-top">
        {items}
      </div>
    );
  }
}