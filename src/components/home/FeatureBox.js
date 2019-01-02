import React from 'react';

export default ({ icon, title, children }) => (
  <div className="featureBox">
    <h3 className="featureBoxTitle">
      {icon} {title}
    </h3>
    <p className="featureBoxDescription">{children}</p>
  </div>
);
