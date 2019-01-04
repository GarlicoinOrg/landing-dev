import React from 'react';

import services from 'src/_data/services';

const Section = ({ title, links }) => {
  const content = links
    ? Object.entries(links).map(([label, link]) => (
        <a
          key={label}
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="servicesLink">
          {label}
        </a>
      ))
    : 'Coming soon.';

  return (
    <>
      <h2 className="servicesHeader">{title}</h2>
      <div className="servicesLinks">{content}</div>
    </>
  );
};

export default () =>
  Object.entries(services).map(([title, links]) => (
    <Section key={title} {...{ title, links }} />
  ));
