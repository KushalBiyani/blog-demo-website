import React from 'react';
import { Navbar, Nav } from "react-bootstrap";
import {  Link } from "react-router-dom";


import './style.css';

/**
* @author
* @function Header
**/

const Header = (props) => {
  return (
    <div className="header ">                        {/*  creating Nanvbar from bootstrap  */ }
      <Navbar bg="light" expand="lg"  style={{ zIndex: 1 }} className="sticky-nav" >
        <Navbar.Brand ><Link to="/" className="navbar-brand">
        Ezyschooling Blog
        </Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav className="ml-auto" >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>   {/*  demo links */ }
            <Nav.Link href="#link">Contact Us</Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Navbar>
    </div>
  )

}

export default Header 