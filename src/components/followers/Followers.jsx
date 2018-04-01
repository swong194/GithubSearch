import React, { Component } from "react";

export default class Followers extends Component {
  componentDidMount() {
    const { id, login, page } = this.props;
    this.props.fetchFollowers(id, login, page);
  }
  render() {
    return (
      <section>
        {this.props.followers.map(follower => (
          <div key={follower.id}>
            <img src={follower.avatar_url} alt="avatar" />
          </div>
        ))}
      </section>
    );
  }
}
