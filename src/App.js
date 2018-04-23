import React, { Component, Fragment } from 'react';
import Navbar from './components/navbar/Navbar';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

class App extends Component {
  render() {
    return (
        <Fragment>
          <Navbar />
        </Fragment>
    );
  }
}

export default App;
