import React from 'react';

import Link from 'gatsby-link';
import {
  faHome,
  faBullhorn,
  faDownload
} from '@fortawesome/free-solid-svg-icons';
import Icon from 'src/components/Icon';

export default () => (
  <div className="mobileNav">
    <Link to="/" className="navBtnMobile" activeClassName="active">
      <Icon icon={faHome} />
    </Link>
    <Link to="/resources" className="navBtnMobile" activeClassName="active">
      <Icon icon={faBullhorn} />
    </Link>
    <Link to="/downloads" className="navBtnMobile" activeClassName="active">
      <Icon icon={faDownload} />
    </Link>
  </div>
);
