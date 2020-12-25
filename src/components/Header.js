import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <Navbar bg='primary' variant='dark'>
      <Navbar.Brand href='/'>99 minutos</Navbar.Brand>
      <Navbar.Collapse className='justify-content-end'>
        <Navbar.Text>Gustavo Cruz</Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
