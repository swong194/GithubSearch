import React, { Component } from "react";
import "./Followers.css";

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
      .fetchFollowers(id, login, nextPage)
      .then(this.props.receivePage(id, nextPage));
  }

  render() {
    const button =
      this.props.maxPage === this.props.page ? null : (
        <button onClick={this.handleLoad}>Load More</button>
      );
    return (
      <section>
        {button}
        <div className="followers">
          {this.props.followers.map(follower => (
            <div key={follower.id}>
              <a href={follower.html_url} target="_blank">
                <img src={follower.avatar_url} alt="avatar" />
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  }
}
