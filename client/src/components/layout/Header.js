import React from 'react';
import {Container, Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
            <Container>
                <Navbar.Brand href="/">MERN Capstone</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link className='nav nav-link' to="/"><i className="fa fa-home"></i>&nbsp;&nbsp;Home</Link>
                        <Link className='nav nav-link' to="/stack"><i className="fa fa-file-code-o"></i>&nbsp;&nbsp;Stack Breakdown</Link>
                        <Link className='nav nav-link' to="/news"><i className="fa fa-newspaper-o"></i>&nbsp;&nbsp;News</Link>
                        <Link className='nav nav-link' to="/history"><i className="fa fa-header"></i>&nbsp;&nbsp;History</Link>
                        <Link className='nav nav-link' to="/about"><i className="fa fa-user-secret"></i>&nbsp;&nbsp;About</Link>
                        <Link className='nav nav-link' to="/report"><i className="fa fa-bug"></i>&nbsp;&nbsp;Report A Bug</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </header>
    )
}

export default Header;
