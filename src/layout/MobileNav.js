import React from 'react';
import { Link } from 'gatsby';

import Home from 'src/_assets/faHome.svg';
import Book from 'src/_assets/faBook.svg';
import Download from 'src/_assets/faDownload.svg';

export default () => (
  <nav className="mobileNav">
    <Link
      to="/"
      className="navBtnMobile"
      activeClassName="active"
      aria-label="Link to home page">
      <Home />
    </Link>
    <Link
      to="/resources"
      className="navBtnMobile"
      activeClassName="active"
      aria-label="Link to resources page">
      <Book />
    </Link>
    <Link
      to="/downloads"
      className="navBtnMobile"
      activeClassName="active"
      aria-label="Link to downloads page">
      <Download />
    </Link>
  </nav>
);
