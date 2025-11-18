// React & Bootstrap Core
import React from 'react'
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Image } from 'react-bootstrap';
import { useState } from "react";
import '../styles/location.css'
import '../styles/responsive.css'
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { IoIosTimer } from "react-icons/io";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";



function Locationpage() {
  return (
    <>
          <Container id='location' className='d-md-flex flex-column justify-content-center my-5'>

        <div className='text-md-start text-center'>
          <p id='chead1'>OUR LOCATIONS</p>
          <p id='chead2'>Visit Us,<br />Experience Luxury</p>
        </div>

        <Row className='gap-md-0 gap-4'>

          <Col md={3} sm={12}>
            <Card className='locationcard' style={{ width: '100%', backgroundColor: "#0A3F36", height: "225px" }}>
              <Card.Body>
                <Card.Title className='text-center my-3' id='lhead'>Zorucci Kochi</Card.Title>
                <div className='d-flex py-2'>
                  <span id='lpara1'><HiOutlineLocationMarker /></span>
                  <Card.Text id='lpara1' className='ms-2'>
                    Metro Piller No 366, Chilton Tower, Koonamthai, Edappally, Kochi, Kerala 682024
                  </Card.Text>
                </div>
                <div className='d-flex mt-2'>
                  <span id='lpara1'><IoIosTimer /></span>
                  <Card.Text id='lpara1' className='ms-2'>Mon-Sun | 10:00am - 08:30pm</Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3} sm={12}>
            <Card className='locationcard' style={{ width: '100%', backgroundColor: "#0A3F36", height: "225px" }}>
              <Card.Body>
                <Card.Title className='text-center my-3' id='lhead'>Zorucci Edappal</Card.Title>
                <div className='d-flex py-2'>
                  <span id='lpara1'><HiOutlineLocationMarker /></span>
                  <Card.Text id='lpara1' className='ms-2'>
                    Calicut Rd, Edappal, Kerala 679576
                  </Card.Text>
                </div>
                <div className='d-flex mt-2'>
                  <span id='lpara1'><IoIosTimer /></span>
                  <Card.Text id='lpara1' className='ms-2'>Mon-Sun | 10:00am - 08:30pm</Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3} sm={12}>
            <Card className='locationcard' style={{ width: '100%', backgroundColor: "#0A3F36", height: "225px" }}>
              <Card.Body>
                <Card.Title className='text-center my-3' id='lhead'>Zorucci Kottakkal</Card.Title>
                <div className='d-flex py-2'>
                  <span id='lpara1'><HiOutlineLocationMarker /></span>
                  <Card.Text id='lpara1' className='ms-2'>
                    Zabeel complex Changuvetty, Kottakkal, Kerala 676503
                  </Card.Text>
                </div>
                <div className='d-flex mt-2'>
                  <span id='lpara1'><IoIosTimer /></span>
                  <Card.Text id='lpara1' className='ms-2'>Mon-Sun | 10:00am - 08:30pm</Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3} sm={12}>
            <Card className='locationcard' style={{ width: '100%', backgroundColor: "#0A3F36", height: "225px" }}>
              <Card.Body>
                <Card.Title className='text-center my-3' id='lhead'>Zorucci Perinthalmanna</Card.Title>
                <div className='d-flex py-2'>
                  <span id='lpara1'><HiOutlineLocationMarker /></span>
                  <Card.Text id='lpara1' className='ms-2'>
                    Sahara Complex, Mysuru - Ooty Rd, Perinthalmanna, Kerala 679322
                  </Card.Text>
                </div>
                <div className='d-flex mt-2'>
                  <span id='lpara1'><IoIosTimer /></span>
                  <Card.Text id='lpara1' className='ms-2'>Mon-Sun | 10:00am - 08:30pm</Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>

        </Row>

        <Row className='mt-5 gap-0'>
          <Col md={6} sm={12} className='mt-md-3 text-center text-md-start'>
            <p className='mt-4' id='chead1'>WALK IN OR BOOK YOUR BRIDAL STYLING APPOINTMENT.</p>
          </Col>

          <Col md={3} sm={12}>
            <button id='locbtn1' className='btn py-md-3 d-flex d-md-block d-none'
              style={{ width: "65%", borderBottom: "solid", borderRadius: 0, color: "#5A2A0B" }}>
              <IoLogoWhatsapp className='me-4' /> Whatsapp <MdArrowOutward className='ms-3' />
            </button>

            <button id='locbtn1' className='btn py-md-3 text-white d-md-none d-block mx-auto'
              style={{ width: "80%", backgroundColor: "#0A3F36" }}>
              <IoLogoWhatsapp className='me-4' /> Whatsapp <MdArrowOutward className='ms-3' />
            </button>
          </Col>

          <Col md={3} sm={12}>
            <button id='locbtn2' className='btn py-md-3 d-flex d-md-block d-none'
              style={{ width: "75%", borderBottom: "solid", borderRadius: 0, color: "#5A2A0B" }}>
              <FaPhoneAlt className='me-3' /> +91 62350 31144 <MdArrowOutward className='ms-3' />
            </button>

            <button id='locbtn2' className='btn py-md-3 d-md-none d-block mx-auto mt-3'
              style={{ width: "80%", backgroundColor: "rgba(0, 0, 0, 0.12)", color: "#5A2A0B" }}>
              <FaPhoneAlt className='me-3' /> +91 62350 31144 <MdArrowOutward className='ms-3' />
            </button>
          </Col>
        </Row>

      </Container>
    </>
  )
}

export default Locationpage