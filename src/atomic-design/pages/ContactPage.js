import React from 'react';

const ContactPage = (props) => {
  const emailContact = 'ejdeza@gmail.com'
  const phoneContact = '+51 987645213'
  return (
      <>
      <h1>Contact</h1>
      <p>
        Hey! <br/>
        You can write us with this information:
      </p>
      <ul>
        <li>Email: {emailContact}</li>
        <li>Number: {phoneContact}</li>
      </ul>
    </>
  );
};

export default ContactPage;