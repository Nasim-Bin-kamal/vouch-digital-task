import React from 'react';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import './Header.css';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg" className='bg-white shadow-sm'>
            <Container>
                <Navbar.Brand href="#" className='navbar-brand fs-3 fw-bold'>
                    ATools<span className='dot'>.</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" >
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >


                    </Nav>
                    <Nav>

                        <Button className='mx-2 my-1 border-0 rounded-1 btn-trial'>Start Free Trial</Button>
                        <Button className='mx-2 my-1 border-0 rounded-1 btn-login'>Login</Button>

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
};

export default Header;