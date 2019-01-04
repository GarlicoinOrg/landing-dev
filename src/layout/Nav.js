import React from 'react';
import { Link } from 'gatsby';

import Logo from 'src/components/svg/Logo';
import Recipes from 'src/assets/recipes.svg';

export default () => (
  <nav className="mainNav">
    <Link
      to="/"
      className="navLogo"
      aria-label="Garlicoin logo: link to home page">
      <Logo className="logo" />
      <span>Garlicoin</span>
    </Link>
    <Link
      to="/"
      className="navBtn"
      activeClassName="active"
      aria-label="Link to home page">
      Home
    </Link>
    <Link
      to="/resources"
      className="navBtn"
      activeClassName="active"
      aria-label="Link to resources page">
      Get Started
    </Link>
    <Link
      to="/downloads"
      className="navBtn"
      activeClassName="active"
      aria-label="Link to downloads page">
      Downloads
    </Link>
    <a href="https://guide.garli.co.in" className="navBtn">
      <Recipes />
    </a>
  </nav>
);
