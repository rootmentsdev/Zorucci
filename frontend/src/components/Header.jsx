import React from 'react'
import { Image } from 'react-bootstrap'
import logo from '../images/logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <>
            <Navbar expand="lg" className="bg-black bg-opacity-25" fixed="top">
                <Container className="d-flex justify-content-between align-items-center">
                    <Image src={logo} alt="" fluid className="d-block d-lg-none" style={{ width: "150px" }}/>
            
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
  
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
                        <Nav className="gap-md-5 d-flex align-items-center">
                            <Nav.Link href="#about" className="text-white">About</Nav.Link>
                            <Nav.Link href="#collections" className="text-white">Collections</Nav.Link>
                            <Nav.Link href="#jewelry" className="text-white">Jewelry</Nav.Link>

                        
                            <Nav.Link href="#herosection" className="d-none d-lg-block">
                                <Image src={logo} alt="" fluid style={{ width: "150px" }} />
                            </Nav.Link>

                            <Nav.Link href="#location" className="text-white">Location</Nav.Link>
                            <Nav.Link href="#blog" className="text-white">Blog</Nav.Link>
                            <Nav.Link href="#contact" className="text-white">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </>
    )
}

export default Header