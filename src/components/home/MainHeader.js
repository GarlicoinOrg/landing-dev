import React from 'react';
import { Link } from 'gatsby';

export default () => (
  <header className="mainHeader">
    <h1>Garlicoin</h1>
    <h3>
      The new, friendly, decentralized cryptocurrency you've never heard of.
    </h3>
    <Link to="/resources">
      <span>GET STARTED</span>
    </Link>
  </header>
);
