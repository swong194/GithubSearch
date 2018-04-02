import React, { Component } from "react";
import "./Followers.css";

export default class Followers extends Component {
  constructor(props) {
    super(props);
    this.handleLoad = this.handleLoad.bind(this);
  }

  componentDidMount() {
    const { id, login, nextPage } = this.props;
    this.props
      .fetchFollowers(id, login, nextPage)
      .then(this.props.receivePage(id, nextPage));
  }

  componentWillReceiveProps(newProps) {
    const { id, login, page, nextPage } = newProps;
    if (id !== this.props.id && page === null) {
      newProps
        .fetchFollowers(id, login, nextPage)
        .then(this.props.receivePage(id, nextPage));
    }
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
    const buttonClass =
      this.props.maxPage === this.props.page ? "no_load" : "load_button";
    return (
      <section>
        <h2 className="text-center">{this.props.login} Followers</h2>
        <div className="followers">
          {this.props.followers.map(follower => (
            <div key={follower.id}>
              <p>{follower.login}</p>
              <a href={follower.html_url} target="_blank">
                <img src={follower.avatar_url} alt="avatar" />
              </a>
            </div>
          ))}
        </div>
        <button className={buttonClass} onClick={this.handleLoad}>
          Load More
        </button>
      </section>
    );
  }
}
