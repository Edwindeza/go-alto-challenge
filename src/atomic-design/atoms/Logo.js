import React from 'react';

function Logo(props) {
  return (
    <div className="logo">
      <img src={props.src} alt={props.alt} />
    </div>
  );
}

export default Logo;