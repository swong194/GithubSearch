import React, { Component } from "react";
import "./Welcome.css";

export default class Welcome extends Component {
  render() {
    return (
      <section className="welcome">
        Welcome to my github search app, start by searching for someone in the
        navbar! Your searched users are also saved on the left side -Sunny
      </section>
    );
  }
}
