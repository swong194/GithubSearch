import React, { Component } from "react";
import { Redirect } from "react-router";
import "./Profile.css";

export default class Profile extends Component {
  render() {
    const { login, avatar_url, followers } = this.props.profile;
    if (!login) {
      return <Redirect to="/" />;
    }
    return (
      <section className="profile">
        <div>
          <img src={avatar_url} alt="profile picture" />
        </div>
        <div>
          <p>
            {login} is followed by {followers} users
          </p>
          <a target="_blank" href="https://github.com/swong194">
            {login}'s github
          </a>
        </div>
      </section>
    );
  }
}
