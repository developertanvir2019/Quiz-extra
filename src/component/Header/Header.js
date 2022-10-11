import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import Banner from '../Banner/Banner';
import './Header.css'

const Header = () => {
    return (
        <div>
            <div className='navbarCus'>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <Navbar.Brand className='Logo' href="#home">Quiz-Extra</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="ms-auto nav-link">
                                <NavLink to={'home'} className={({ isActive }) => isActive ? 'active' : undefined}>Home</NavLink>
                                <NavLink to={'statics'}>statics</NavLink>
                                <NavLink to={'topics'}>Topics</NavLink>
                                <NavLink to={'blog'}>Blog</NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    );
};

export default Header;