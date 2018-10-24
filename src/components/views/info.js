import React, { Component } from 'react';

const notice = {
  fontWeight: "bold"
}

const italic = {
  fontstyle: "italic"
}

export default class Info extends Component {
  render() {
    return(
      <div style={notice}>
        <p><span style={italic}>Date</span></p>
        <p><span></span></p>
        <p><span></span></p>
        <p><span></span></p>
        <p><span></span></p>
      </div>
    );
  }
}