import React from 'react';
import Helmet from 'react-helmet';
import 'prismjs/themes/prism-twilight.css';
import '@fortawesome/fontawesome-free/scss/fontawesome.scss';
import '@fortawesome/fontawesome-free/scss/brands.scss';
import '@fortawesome/fontawesome-free/scss/solid.scss';
import Footer from '../components/Footer/Footer';
import config from '../../data/SiteConfig';
import './index.scss';
import './global.scss';

export default class MainLayout extends React.Component {
  getLocalTitle() {
    function capitalize(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const pathPrefix = config.pathPrefix ? config.pathPrefix : '/';
    const currentPath = this.props.location.pathname
      .replace(pathPrefix, '')
      .replace('/', '');
    let title = '';
    if (currentPath === '') {
      title = config.siteTitle;
    } else if (currentPath === 'tags') {
      title = 'Tags';
    } else if (currentPath === 'categories') {
      title = 'Categories';
    } else if (currentPath === 'about') {
      title = 'About';
    } else if (currentPath.includes('posts')) {
      title = 'Article';
    } else if (currentPath.includes('tags')) {
      const tag = currentPath
        .replace('tags', '')
        .replace('/', '')
        .replace('-', ' ');
      title = `Tagged in ${capitalize(tag)}`;
    } else if (currentPath.includes('categories')) {
      const category = currentPath
        .replace('categories', '')
        .replace('/', '')
        .replace('-', ' ');
      title = `${capitalize(category)}`;
    }
    return title;
  }
  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
        </Helmet>
        <div className="page-container">
          {children()}
          <Footer />
        </div>
      </div>
    );
  }
}
