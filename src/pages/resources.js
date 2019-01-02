import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';

import App from 'src/App';
import ServiceSection from 'src/components/ServiceSection';

import Recipes from 'src/_assets/recipes.svg';
import services from 'src/_data/services';

export default () => (
  <App wrapper="resourcesWrapper" page="resources">
    <Helmet>
      <title>Get Started - Garlicoin</title>
    </Helmet>
    <section className="intro">
      <h1 className="title">Get Started</h1>
      <p>
        We are proud to have Garlic Recipes as our official resource guide for
        Garlicoin. Click on the book to learn everything you need to know about
        this revolutionary new cryptocurrency.
      </p>
      <a href="https://guide.garli.co.in" className="docsLink">
        <span role="img" aria-label="finger pointing right" className="emoji">
          👉
        </span>
        <Recipes />
      </a>
      <p>
        If you'd rather jump straight into the action, scroll down to our{' '}
        <Link to="/resources#services" className="routeLink">
          Services section
        </Link>{' '}
        or head over to the{' '}
        <Link to="/downloads" className="routeLink">
          Downloads page
        </Link>
        .
      </p>
    </section>
    <section id="services">
      <h2 className="title">Services</h2>
      <h4 className="title">
        Wallets, pools and other services the Garlicoin dev team has approved.
      </h4>
      <div className="subTitle note">
        Note: While we trust these services, we are not necessarily affiliated
        with them.
      </div>
      {Object.keys(services).map(section => (
        <ServiceSection
          key={section}
          title={section}
          values={services[section]}
        />
      ))}
    </section>
  </App>
);
