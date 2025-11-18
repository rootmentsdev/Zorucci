import React from 'react'
import { Image } from 'react-bootstrap'
import logo from '../images/logo.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useEffect, useState } from "react";
import "../styles/Header.css";


function Header() {
  const [hidden, setHidden] = useState(false);
  const [prevScroll, setPrevScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > prevScroll && currentScroll > 100) {
        // scrolling down -> hide header
        setHidden(true);
      } else {
        // scrolling up -> show header
        setHidden(false);
      }

      setPrevScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScroll]);


    return (
        <>
            <header  className={`main-header ${hidden ? "hide" : ""}`}>
                <Navbar expand="lg" className="bg-black bg-opacity-25">
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
            </header>


        </>
    )
}

export default Header