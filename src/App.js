import React from 'react';
import Helmet from 'react-helmet';

import classNames from 'classnames';
import Nav from 'src/layout/Nav';
import MobileNav from 'src/layout/MobileNav';
import Alert from 'src/layout/Alert';
import Footer from 'src/layout/Footer';

import './stylesheets/main.scss';

export default ({ wrapper, page, children }) => (
  <>
    <Helmet
      title="Garlicoin"
      meta={[
        {
          name: 'description',
          content:
            "The new, friendly, decentralized cryptocurrency you've never heard of."
        },
        {
          name: 'keywords',
          content: 'cryptocurrency, garlicoin, blockchain, open source'
        },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }
      ]}>
      {/*Open Graph / Facebook*/}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://garlicoin.io/" />
      <meta property="og:title" content="Garlicoin" />
      <meta
        property="og:description"
        content="The new, friendly, decentralized cryptocurrency you've never heard of."
      />

      {/*Twitter*/}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://garlicoin.io/" />
      <meta property="twitter:title" content="Garlicoin" />
      <meta
        property="twitter:description"
        content="The new, friendly, decentralized cryptocurrency you've never heard of."
      />
      <html lang="en" />
      <noscript>Please enable Javascript.</noscript>
    </Helmet>
    <main role="main" className={classNames('app', { [page]: page })}>
      <Nav />
      <Alert />
      <div className={wrapper}>{children}</div>
      <Footer />
      <MobileNav />
    </main>
  </>
);
