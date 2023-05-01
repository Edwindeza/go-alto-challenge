import React from 'react';
import Header from '../organisms/Header';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Footer = styled.footer`
  width:100%;
  background-color: black;
  color: white;
  padding: 20px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-size: 14px;
  }
`

const Container = styled.main`
  min-height: calc(100vh - 229.5px);
`

function DefaultTemplate(props) {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <Footer>
        <p>Contact: {props.contactInfo.phone}</p>
        <p>Email: {props.contactInfo.email}</p>
      </Footer>
    </>
  );
}

export default DefaultTemplate;