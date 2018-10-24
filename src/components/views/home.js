import React, { Component } from 'react';

const top = {
  marginBottom: "1em"
}

export default class Home extends Component {
  render() {
    return(
      <div>
        <h1 style={top}>Magers Gamers</h1>
        <img src="https://res.cloudinary.com/poetrique/image/upload/v1540362592/miscellaneous/fifa-19-poster.jpg" alt="fifa-19-poster" />
      </div>
    );
  }
}