import React from 'react';
import Icon from '../images/icon.png';
import { Container, Navbar, Nav } from 'react-bootstrap';
import StyledLink from './link';

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
        <Container style={{ margin: '0.5rem' }}>
          <Navbar.Brand href="/">
            <img alt="" src={Icon} width="30" height="30" className="d-inline-block align-top" /> Wrapper Offline
            Desktop
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <StyledLink to="/">
                <Nav.Link as="span" eventKey="">
                  Home
                </Nav.Link>
              </StyledLink>
              <StyledLink to="/why">
                <Nav.Link as="span" eventKey="why">
                  Why?
                </Nav.Link>
              </StyledLink>
              <StyledLink to="/downloads">
                <Nav.Link as="span" eventKey="downloads">
                  Downloads
                </Nav.Link>
              </StyledLink>
              <Nav.Link href="javascript:alert('Has not been made public, yet.')">Github</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
