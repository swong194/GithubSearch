import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Saved.css";

export default class Saved extends Component {
  render() {
    const { profiles } = this.props;
    return (
      <section className="saved">
        <h2>Previous searches</h2>
        <div>
          {profiles.map(profile => (
            <Link key={profile.id} to={`/profiles/${profile.id}`}>
              {profile.login}
            </Link>
          ))}
        </div>
      </section>
    );
  }
}
