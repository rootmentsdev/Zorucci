import React from 'react'
import { Image } from 'react-bootstrap'
import logo from '../images/logo.png'
import { Navbar, Nav, Container } from "react-bootstrap";

function Header() {
    return (
        <>

            <nav class="navbar navbar-expand-lg bg-transaprent sticky-top">
                <div class="container-fluid">
                    <a className="navbar-brand" href="#">
                        <Image src={logo} alt="" fluid className="" style={{ width: "200px" }} />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul id='list' class="navbar-nav mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Collections</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href='#'>Jewelry</a>
                            </li>
                             <li class="nav-item">
                                <a class="nav-link" href="#">Location</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Blogs</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href='#'>Contact</a>
                            </li>
                        </ul>
                    </div>
            
                </div>
            </nav>
        </>
    )
}

export default Header