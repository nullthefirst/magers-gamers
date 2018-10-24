import React, { Component } from 'react';

import './App.css';

const footerStyle = {
  textAlign: "center",
  color: "#fff",
  marginTop: "4em"
}

export default class Footer extends Component {
  render() {
    return(
      <div style={footerStyle}>
        <h6>Coded by Usheninte</h6>
      </div>
    );
  }
}
