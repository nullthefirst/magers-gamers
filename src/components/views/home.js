import React, { Component } from 'react';

import Info from './info';

const top = {
  marginBottom: "1em"
}

const responsive = {
  width: "100%",
  height: "auto"
}

export default class Home extends Component {
  render() {
    return(
      <div>
        <h1 style={top}>Magers Gamers</h1>
        <img style={responsive} src="https://res.cloudinary.com/poetrique/image/upload/v1540362592/miscellaneous/fifa-19-poster.jpg" alt="fifa-19-poster" />
        <Info />
      </div>
    );
  }
}