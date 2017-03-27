# githubinfo-react

A Simple React application that consumes GitHub users and repositories API.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Table of Contents

- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
  - [npm run eject](#npm-run-eject)


## Folder Structure

```
githubinfo-react/
  public/
    index.html
    favicon.ico
  src/
    components/
      github/
        GitHub.jsx
      searchbar/
        logo.svg
        SearchBar.css
        SearchBar.jsx
      userinfo/
        UserInfo.jsx
        UserNotFound.css
        UserNotFound.jsx
        UserProfile.css
        UserProfile.jsx
        UseRepositories.jsx
    services/
      index.js
  .editorconfig
  .gitignore
  package.json
  README.md
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.