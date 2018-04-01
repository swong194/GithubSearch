import React, { Component } from "react";

export default class Followers extends Component {
  constructor(props) {
    super(props);
    this.handleLoad = this.handleLoad.bind(this);
  }

  componentDidMount() {
    const { id, login, page } = this.props;
    this.props.fetchFollowers(id, login, page);
  }

  handleLoad(e) {
    e.preventDefault();
    const { id, login, nextPage, maxPage, page } = this.props;
    if (maxPage === page) return;
    this.props
      .fetchFollowers(id, login, page + 1)
      .then(this.props.receivePage(id, page + 1));
  }

  render() {
    return (
      <section>
        <button onClick={this.handleLoad}>Load More</button>
        {this.props.followers.map(follower => (
          <div key={follower.id}>
            <img src={follower.avatar_url} alt="avatar" />
          </div>
        ))}
      </section>
    );
  }
}
