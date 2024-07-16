// src/components/NavBar.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
    return (
    <Navbar className="navbar-custom" expand="lg">
        <Navbar.Brand href="#home">Luxury Watch Brand</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#promotions">Promotions</Nav.Link>
            <Nav.Link href="#best-sellers">Best Sellers</Nav.Link>
            <Nav.Link href="#brands">Brands</Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Navbar>
    );
};

export default NavBar;
