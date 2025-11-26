// React & Bootstrap Core
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import { useState } from "react";

// Layout Components
import Header from '../components/Header';

// Home Page Images
import home from '../images/Home.jpg';
import home2 from "../images/homeimg2.jpg";
import { MdArrowOutward } from "react-icons/md";


function Landingpage() {

  return (
    <>
      <section id='herosection'>
        <div className='w-100 position-relative'>
          <Header />
          <Image
            style={{ width: "100%", height: "655px", objectFit: "cover", objectPosition: "70% 23%" }}
            src={home}
            alt=""
            fluid
          />
        </div>

        <div
          id='greenbg'
          className='w-100 position-relative'
          style={{ minHeight: "500px", backgroundColor: "#0A3F36" }}
        ></div>

        <Container
          className='white-box position-absolute start-50 translate-middle-x'
          style={{
            top: "63%",
            backgroundColor: "white",
            width: "80%",
            borderTopRightRadius: "200px",
            height: "488px",
          }}
        >
          <Row className='align-items-center'>
            <Col
              md={8}
              className='px-md-5 d-flex flex-column justify-content-center text-center text-md-start order-md-1 order-2 mb-5'
            >
              <h1 id='head1'>Luxury Bridal Wear for the Modern Bride</h1>

              <p id='para1'>
                Step into Zorucci – Kerala's leading destination for premium bridal fashion. Explore designer
                bridal lehengas, elegant wedding gowns, and timeless bridal sarees, all handcrafted with love and
                luxury in mind. Whether you’re walking the aisle or celebrating tradition, Zorucci is where your
                bridal dream begins.
              </p>

              <div className='d-flex flex-column align-items-center flex-md-row gap-2 gap-md-5 my-3 px-3 px-md-0'>
                {/* Large screen Explore button */}
                <button
                  id='homebtn'
                  className='btn py-md-3 text-white d-md-block d-none'
                  style={{ width: "100%", backgroundColor: "#0A3F36" }}
                >
                  <a href="#collections" style={{textDecoration:"none",color:"white"}}>Explore Collection</a>
                </button>

                {/* Mobile Explore button */}
                <button
                  id='homebtn'
                  className='btn my-3 py-md-3 text-white d-md-none d-block order-md-1 order-2'
                  style={{ width: "100%", backgroundColor: "#0A3F36" }}
                >
                  <a href="#collections" style={{textDecoration:"none",color:"white"}}>Explore Collection</a>
                </button>

                {/* Large screen Book button */}
                <button
                  id='homebtn'
                  className='btn py-md-3 d-flex d-md-block d-none'
                  style={{
                    width: "100%",
                    border: "none",
                    borderBottom: "solid",
                    borderRadius: "0px",
                    color: "#5A2A0B",
                  }}
                >
                  <a style={{textDecoration:"none",color:"black"}} href="tel:+917593844448"> Book a Private Appointment{" "}</a>
                 
                  <span>
                    <MdArrowOutward className='ms-5 mb-1' />
                  </span>
                </button>

                {/* Mobile Book button */}
                <button
                  id='homebtn'
                  className='btn py-md-3 d-flex d-md-none d-block order-md-2 order-1 align-items-center justify-content-center'
                  style={{
                    width: "100%",
                    border: "none",
                    borderBottom: "0px",
                    borderRadius: "0px",
                    color: "#5A2A0B",
                  }}
                >
                 <a className='' style={{textDecoration:"none",color:"black"}} href="tel:+917593844448">Book a Private Appointment</a>
                  <span>
                    <MdArrowOutward className='ms-4 mb-1' />
                  </span>
                </button>
              </div>
            </Col>

            <Col md={4} className='p-0 order-md-2 order-1'>
              <div id='homeimg2' style={{ height: "100%", transform: "translateY(-83px)" }}>
                <Image
                  src={home2}
                  alt=""
                  fluid
                  style={{
                    width: "480px",
                    height: "571px",
                    objectFit: "cover",
                    borderTopRightRadius: "200px",
                    borderTopLeftRadius: "200px",
                  }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Landingpage