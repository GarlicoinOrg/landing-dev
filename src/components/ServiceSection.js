import React from 'react';

export default ({ title, values }) => {
  let content = 'Coming soon.';
  if (Object.values(values).length > 0) {
    content = Object.keys(values).map(val => (
      <a
        href={values[val]}
        target="_blank"
        rel="noopener noreferrer"
        className="servicesLink">
        {val}
      </a>
    ));
  }

  return (
    <>
      <h2 className="servicesHeader">{title}</h2>
      <div className="servicesLinks">{content}</div>
    </>
  );
};
