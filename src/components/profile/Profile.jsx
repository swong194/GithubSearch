import React, { Component } from "react";
import "./Profile.css";

export default class Profile extends Component {
  render() {
    const { login, avatar_url, followers } = this.props.profile;
    if (!login) {
      return <div className="text-center">Profile has not been found</div>;
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
