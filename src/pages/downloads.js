import React from 'react';
import { Link } from 'gatsby';

import App from 'src/App';
import SEO from 'src/components/seo';
import DownloadBtn from 'src/components/downloads/DownloadBtn';

import buttons from 'src/data/downloads';

export default () => (
  <App wrapper="downloadsWrapper" page="downloads">
    <SEO
      title="Downloads - Garlicoin"
      keywords={['download', 'windows', 'macos', 'linux']}
    />
    <section>
      <h1 className="title">Downloads</h1>
      <div className="subTitle">
        Not sure where to start? Jump over to our{' '}
        <Link to="resources" className="routeLink">
          Get Started section
        </Link>{' '}
        or head directly to{' '}
        <a href="https://guide.garli.co.in">Garlic Recipes</a>.
      </div>
      <div className="downloadsBtns">
        {Object.entries(buttons).map(([key, button]) => {
          return <DownloadBtn key={key} data={button} />;
        })}
      </div>
    </section>
  </App>
);
