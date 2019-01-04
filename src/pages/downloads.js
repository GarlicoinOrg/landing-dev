import React from 'react';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';

import App from 'src/App';
import DownloadBtn from 'src/components/downloads/DownloadBtn';

import { buttons } from 'src/data/downloads';

export default () => (
  <App wrapper="downloadsWrapper" page="downloads">
    <Helmet>
      <title>Downloads - Garlicoin</title>
    </Helmet>
    <section>
      <h1 className="title">Downloads</h1>
      <div className="subTitle">
        <>Not sure where to start? Jump over to our </>
        <Link to="resources" className="routeLink">
          Get Started section
        </Link>
        <> </>
        or head directly to{' '}
        <a href="https://guide.garli.co.in">Garlic Recipes</a>.
      </div>
      <div className="downloadsBtns">
        {Object.keys(buttons).map(button => {
          const data = buttons[button];
          return <DownloadBtn key={data.desc} data={data} />;
        })}
      </div>
    </section>
  </App>
);
