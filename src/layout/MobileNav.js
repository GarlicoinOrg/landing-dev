import React from 'react';
import { Link } from 'gatsby';

import Home from 'src/_assets/faHome.svg';
import Book from 'src/_assets/faBook.svg';
import Download from 'src/_assets/faDownload.svg';

export default () => (
  <div className="mobileNav">
    <Link to="/" className="navBtnMobile" activeClassName="active">
      <Home />
    </Link>
    <Link to="/resources" className="navBtnMobile" activeClassName="active">
      <Book />
    </Link>
    <Link to="/downloads" className="navBtnMobile" activeClassName="active">
      <Download />
    </Link>
  </div>
);
