import React from 'react';

import classNames from 'classnames';

import Times from 'src/_assets/faTimes.svg';

// import alert from 'src/_data/alert';
const alert = {};

export default () => {
  const { message, type, link } = alert;
  if (!message) return null;
  return (
    <div className={classNames('alert', { [type]: !!type })}>
      <a href={link || '#'}>{message}</a>
      <button className="closeAlert" onClick={() => console.log('clicked')}>
        <Times />
      </button>
    </div>
  );
};
