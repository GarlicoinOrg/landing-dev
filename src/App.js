import React from 'react';

import SEO from 'src/components/seo';
import classNames from 'classnames';
import Nav from 'src/layout/Nav';
import MobileNav from 'src/layout/MobileNav';
import Alert from 'src/layout/Alert';
import Footer from 'src/layout/Footer';

import './stylesheets/main.scss';

export default ({ wrapper, page, children }) => (
  <div className={classNames('app', { [page]: page })}>
    <SEO />
    <Nav />
    <Alert />
    <main role="main" className={wrapper}>
      {children}
    </main>
    <Footer />
    <MobileNav />
  </div>
);
