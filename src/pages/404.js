import React from 'react';
import { Link } from 'gatsby';

import App from 'src/App';

export default () => (
  <App wrapper="notfound">
    <h1>You seem to be lost</h1>
    <h3>
      <Link to="/" className="routeLink">
        Follow the trail of garlicoin back home.
      </Link>
    </h3>
  </App>
);
