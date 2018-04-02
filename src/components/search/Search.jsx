import React, { Component } from "react";
import "./Search.css";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { username: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(e) {
    this.setState({ username: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.fetchProfile(this.state.username).then(profile => {
      this.props.receivePage(profile.id, null);
      this.setState({ username: "" });
      if (!profile.id) {
        this.props.history.push("/");
      } else {
        this.props.history.push(`/profiles/${profile.id}`);
      }
    });
  }

  render() {
    return (
      <section className="search">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleSearch}
          />
          <button>Search</button>
        </form>
      </section>
    );
  }
}
