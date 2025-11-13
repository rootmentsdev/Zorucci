import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import logo2 from '../images/logo2.png'
import { Image } from 'react-bootstrap';
import { FaPhoneAlt } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";



function Footer() {
  return (
    <>
    <Container className='pt-5 mx-auto '>
       <Row className='mx-auto'>
         <Col sm md className=' d-flex flex-column justify-content-start '>
            <ul id='list'>
              <li className=''><Image src={logo2} alt="" fluid className=" mb-5 pb-3" style={{width:"180px"}}/></li>
              <li className='my-2'><FaPhoneAlt className='me-3'/>+91 62350 31144</li>
              <li className='my-2'><RiWhatsappFill className='me-3' />Whatsapp</li>         
            </ul>
          </Col>

         <Col sm md className=' d-flex flex-column justify-content-end'>
         <h6 className='ms-4'>QUICK LINKS</h6>
         <ul id='list'>
          <li className='my-2'>Home</li>
          <li className='my-2'>About Zorucci</li>
          <li className='my-2'>Collections</li>
          <li className='my-2'>How it works?</li>
          <li className='my-2'>Why rent?</li>
         </ul>
         </Col>

         <Col sm md className=' d-flex flex-column justify-content-end'>
         <h6 className='ms-4'>INFORMATIONS</h6>
         <ul id='list'>
          <li className='my-2'>Location</li>
          <li className='my-2'>FAQs</li>
          <li className='my-2'>Privacy Policy</li>
          <li className='my-2'>Terms & Conditions</li>
          <li className='my-2'>Contact</li>
         </ul>
         </Col>

         <Col sm md className=' d-flex flex-column justify-content-end'>
         <h6 className='ms-4'>CONTACT</h6>
         <ul id='list'>
          <li className='my-2'>+91 9874561230</li>
          <li className='my-2'>zorucci@gmail.com</li>
          <li className='my-2'>Store Locations</li>
          <li className='my-2'>Instagram</li>
          <li className='my-2'>LinkedIn</li>
         </ul>
         </Col>

       </Row>
       <hr className='w-50 mx-auto'/>
       <div className='text-center mt-3'>
          <h6>2025 Zorucci | All rights reserved</h6>
         </div>
     
      
    </Container>
    </>
  )
}

export default Footer