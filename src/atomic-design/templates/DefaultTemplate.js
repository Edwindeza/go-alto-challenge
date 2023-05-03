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
  justify-content: center;
  p {
    font-size: 14px;
  }
`

const Container = styled.main`
  min-height: calc(100vh - 210px);
`

function DefaultTemplate(props) {
  return (
    <>
      <Header />
      <Container className='container'>
        <Outlet />
      </Container>
      <Footer >
        <p>Copyright  Ⓒ By Edwin Deza</p>
      </Footer>
    </>
  );
}

export default DefaultTemplate;