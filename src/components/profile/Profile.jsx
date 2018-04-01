import React, { Component } from "react";

export default class Profile extends Component {
  render() {
    const { login, avatar_url, followers } = this.props.profile;
    return (
      <section>
        <img src={avatar_url} alt="profile picture" />
        <p>
          {login} is followed by {followers} users
        </p>
      </section>
    );
  }
}
