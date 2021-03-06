import React, { Component } from 'react';
import Card from 'react-md/lib/Cards/Card';
import CardText from 'react-md/lib/Cards/CardText';
import Link from 'gatsby-link';
import { TweenMax } from 'gsap';
import Overdrive from 'react-overdrive';
import UserLinks from '../UserLinks/UserLinks';
import config from '../../../data/SiteConfig';
import './About.scss';

class About extends Component {
  componentDidMount() {
    const el = this._inputRef;
    TweenMax.set(el, { css: { scale: 0, opacity: 0 } });
    TweenMax.to(el, 0.25, { css: { scale: 1, opacity: 1 } });
  }

  render() {
    return (
      <div className="about-container md-grid mobile-fix">
        <Card className="md-grid md-cell--8" style={{ borderRadius: '50px' }}>
          <div className="about-wrapper">
            <Link to="/">
              <Overdrive id="me">
                <img
                  src={config.userAvatar}
                  className="about-img"
                  alt={config.userName}
                />
              </Overdrive>
            </Link>
            <h1 ref={r => (this._inputRef = r)} className="my-name">
              Ben Newton
            </h1>
            <CardText>
              <p className="about-text md-body-1">{config.userDescription}</p>
            </CardText>
            <UserLinks contactMe config={config} />
          </div>
        </Card>
      </div>
    );
  }
}

export default About;
