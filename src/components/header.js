import React from 'react'
import { Link } from 'gatsby'
import { Navbar, NavDropdown, Nav, Form, FormControl, Button } from 'react-bootstrap'

const Header = () => {
    return (
        <Navbar className="navbar-fixed-top navbar-default navbar-light" expand="lg">
            <Navbar.Brand className="spacing" href="#home">Blogger.com</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav className="spacing" > <Link to='/'>Home</Link></Nav>
                    <Nav className="spacing">  <Link to='/about'>About </Link></Nav>
                    <Nav className="spacing">  <Link to='/blog'>blog </Link></Nav>
                    <Nav className="spacing">  <Link to='/contact'>contact </Link></Nav>
                </Nav>

            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header