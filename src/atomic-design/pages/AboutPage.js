import React from 'react';
import DefaultTemplate from '../templates/DefaultTemplate';

const AboutPage = (props) => {
  return (
    <DefaultTemplate
      logoSrc={props.logoSrc}
      logoAlt={props.logoAlt}
      contactInfo={null}
    >
      <h1>About</h1>
      <p>This is the about page of my blog.</p>
    </DefaultTemplate>
  );
};

export default AboutPage;