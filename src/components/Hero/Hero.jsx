import React, { Component } from "react";
import Link from "gatsby-link";
import Overdrive from "react-overdrive";
import config from "../../../data/SiteConfig";
import UserLinks from "../UserLinks/UserLinks";
import "./Hero.scss";

class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <Link to="/about">
          <Overdrive id="me">
            <img
              src={config.userAvatar}
              className="me"
              alt={config.userName}
            />
          </Overdrive>
        </Link>
        <h1 className="my-name">Ben Newton</h1>
        <h2>Full Stack JavaScript Developer at <a href="http://sapientrazorfish.com/">SR<span className="sr">_</span></a></h2>
        <UserLinks contactMe config={config} />
      </div>
    );
  }
}

export default Hero;
