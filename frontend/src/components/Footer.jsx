import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo2 from '../images/logo2.png'
import { Image } from 'react-bootstrap';
import { FaPhoneAlt } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";



function Footer() {
  return (
    <>
      <Container className='pt-5 mx-auto'>
        <Row className='mx-auto g-5 text-center text-md-start'>

          {/* Column 1 */}
          <Col md={3} sm={12} className='d-flex flex-column justify-content-start'>
            <ul id='list' className='p-0 m-0'>
              <li>
                <Image
                  src={logo2}
                  alt=""
                  fluid
                  className="mb-3 pb-3 mx-auto mx-md-0"
                  style={{ width: "180px" }}
                />
              </li>
              <li className='py-3'>
                <FaPhoneAlt className='me-3' /> +91 62350 31144
              </li>
              <li className='py-3'>
                <RiWhatsappFill className='me-3' /> Whatsapp
              </li>
            </ul>
          </Col>

          {/* Column 2 */}
          <Col md={3} sm={12} className='d-md-flex flex-column justify-content-end'>
            <h6 className='ms-0'>QUICK LINKS</h6>
            <ul id='list' className='p-0 m-0'>
              <li className='my-2'><a href="#herosection">Home</a></li>
              <li className='my-2'><a href="#about">About</a></li>
              <li className='my-2'><a href="#collections">Collections</a></li>
              <li className='my-2'>How it works?</li>
              <li className='my-2'>Why rent?</li>
            </ul>
          </Col>

          {/* Column 3 */}
          <Col md={3} sm={12} className='d-md-flex flex-column justify-content-end'>
            <h6 className='ms-0'>INFORMATIONS</h6>
            <ul id='list' className='p-0 m-0'>
              <li className='my-2'><a href="#location">Location</a></li>
              <li className='my-2'><a href="#faq"></a>FAQs</li>
              <li className='my-2'>Privacy Policy</li>
              <li className='my-2'>Terms & Conditions</li>
              <li className='my-2'><a href="#contact">Contact</a></li>
            </ul>
          </Col>

          {/* Column 4 */}
          <Col md={3} sm={12} className='d-md-flex flex-column justify-content-end pb-3'>
            <h6 className='ms-0'>CONTACT</h6>
            <ul id='list' className='p-0 m-0'>
              <li className='my-2'>+91 9874561230</li>
              <li className='my-2'>zorucci@gmail.com</li>
              <li className='my-2'><a href="https://www.instagram.com/zorucci?igsh=MXh3dzJnczQ1MDRkMA=="><FaSquareInstagram className='fs-2' /></a></li>
              <li className='my-2'><FaLinkedin className='fs-2'/></li>
            </ul>
          </Col>

        </Row>

        <hr className='w-50 mx-auto' />

        <div className='text-center mt-3'>
          <h6>2025 Zorucci | All rights reserved</h6>
        </div>
      </Container>

    </>
  )
}

export default Footer