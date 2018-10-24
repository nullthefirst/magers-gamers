import React, { Component } from 'react';

import Home from './components/views/home';
import Footer from './components/Footer';

import './components/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
