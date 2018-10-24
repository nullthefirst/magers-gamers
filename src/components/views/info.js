import React, { Component } from 'react';

const notice = {
  fontWeight: "bold"
}

const under = {
  textDecoration: "underline"
}

const note = {
  paddingTop: "1em",
  paddingBottom: "1em",
  paddingLeft: "1em",
  paddingRight: "1em",
  backgroundColor: "#fff",
  color: "#6499be"
}

export default class Info extends Component {
  render() {
    return(
      <div style={notice}>
        <p>
          <span><em style={under}>Date:</em> 27th & 28th October 2018</span>
        </p>
        <p>
          <span><em style={under}>Venue:</em> LCU Fashion & Lifestyle Academy</span>
        </p>
        <p>
          <span><em style={under}>Time:</em> 5pm</span>
        </p>
        <div style={note}>
          <p>
            <span><em>Tickets Available for Sale AT Royals Cafeteria</em></span>
          </p>
          <p>
            <span><em>Ticket Sales ends Friday, October 26th 2018</em></span>
          </p>
        </div>
      </div>
    );
  }
}