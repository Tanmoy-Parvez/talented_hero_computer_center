import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Header.css"
import "animate.css"

const Header = () => {
    // navbar section
    return (
        <nav>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className="animate__animated animate__slideInDown">
                        <span className="text-info">Talented Hero</span> Computer Training Center
                    </Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link>
                            <Link to="/home" className="nav-items">
                                Home
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/services" className="nav-items">
                                Services
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/about" className="nav-items">
                                About Us
                            </Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/contact" className="nav-items">
                                Contact Us
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </nav>
    );
};

export default Header;