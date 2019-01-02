import React from 'react';

export default ({ data }) => {
  const { link, icon, desc } = data;

  return (
    <a href={link} className="downloadBtn">
      {icon}
      <span>{desc}</span>
    </a>
  );
};
