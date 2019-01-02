import React from 'react';
import Link from 'gatsby-link';

import Logo from 'src/components/svg/Logo';
import recipes from 'src/_assets/recipes.svg';

export default () => (
  <nav>
    <Link to="/" className="navLogo">
      <Logo className="logo" />
      <span>Garlicoin</span>
    </Link>
    <Link to="/" className="navBtn" activeClassName="active">
      Home
    </Link>
    <Link to="/resources" className="navBtn" activeClassName="active">
      Get Started
    </Link>
    <Link to="/downloads" className="navBtn" activeClassName="active">
      Downloads
    </Link>
    <a href="https://guide.garli.co.in" className="navBtn">
      <img src={recipes} alt="Garlic Recipes" />
    </a>
  </nav>
);
