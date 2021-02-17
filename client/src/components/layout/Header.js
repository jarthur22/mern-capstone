import React from 'react';
import {Container, Navbar, Nav} from 'react-bootstrap';

const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
            <Container>
                <Navbar.Brand href="/">MERN Capstone</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/"><i className="fa fa-home"></i>&nbsp;&nbsp;Home</Nav.Link>
                        <Nav.Link href="/stack"><i className="fa fa-file-code-o"></i>&nbsp;&nbsp;Stack Breakdown</Nav.Link>
                        <Nav.Link href="/news"><i className="fa fa-newspaper-o"></i>&nbsp;&nbsp;News</Nav.Link>
                        <Nav.Link href="/history"><i className="fa fa-header"></i>&nbsp;&nbsp;History</Nav.Link>
                        <Nav.Link href="/about"><i className="fa fa-user-secret"></i>&nbsp;&nbsp;About</Nav.Link>
                        <Nav.Link href="/report"><i className="fa fa-bug"></i>&nbsp;&nbsp;Report A Bug</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </header>
    )
}

export default Header;
