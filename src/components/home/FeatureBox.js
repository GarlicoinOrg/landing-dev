import React from 'react';

import Icon from 'src/components/Icon';

export default ({ icon, title, children }) => (
  <div className="featureBox">
    <h3 className="featureBoxTitle">
      <Icon icon={icon} /> {title}
    </h3>
    <p className="featureBoxDescription">{children}</p>
  </div>
);
