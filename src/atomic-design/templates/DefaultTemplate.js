import React from 'react';
import Navbar from '../molecules/Navbar';

function DefaultTemplate(props) {
  return (
    <>
      <Navbar logoSrc={props.logoSrc} logoAlt={props.logoAlt} />
      <main>{props.children}</main>
      <footer>
        <p>Contact: {props.contactInfo}</p>
      </footer>
    </>
  );
}

export default DefaultTemplate;