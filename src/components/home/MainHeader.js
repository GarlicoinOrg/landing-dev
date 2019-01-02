import React from 'react';
import { Link } from 'gatsby';

// import Logo from 'src/components/svg/Logo';

export default () => (
  <div className="mainHeader">
    {/*<Logo className="logo" />*/}
    <h1>Garlicoin</h1>
    <h3>
      The new, friendly, decentralized cryptocurrency you've never heard of.
    </h3>
    <Link to="/resources">
      <span>GET STARTED</span>
    </Link>
    {/*<span className="moreInfo">Scroll to Learn More</span>*/}
  </div>
);
