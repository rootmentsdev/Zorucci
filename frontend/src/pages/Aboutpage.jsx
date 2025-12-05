import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import '../styles/about.css'
import '../styles/responsive.css'

// About Section Images
import about1 from '../images/about1.png';




function Aboutpage() {
  return (
    <>
      <section id='about' className='p-4'>
        <Container fluid>
          <Row className=''>

            <Col md={4} className=' py-3 d-flex justify-content-center'>

            <Image src={about1} fluid alt="example" className='aboutimg1' style={{width:"374px" , height:"100%"} }/>
        
            </Col>

            <Col md={8} className='text-md-start text-center pe-md-5 mt-md-5'>
              <h5 id='ahead' className='my-4'>WHO WE ARE</h5>
              <h1 id='ahead1' className='my-md-4'>
                Luxury Without the <br /> Lifetime Price Tag
              </h1>

              <p id='apara1' className='py-4'>
                Zorucci is a luxury bridal wear brand based in Kerala, dedicated to curating exquisite bridal fashion. Since 2018, we’ve served thousands of brides with personalized styling, couture craftsmanship, and timeless bridal elegance. From traditional to modern, Zorucci combines heritage-rich details with contemporary design.
              </p>

              <p id='apara1' className=''>
                With four showrooms across Kochi, Perinthalmanna, Kottakkal, and Edappal, we bring curated collections and expert stylists to brides across India.
              </p>
            </Col>

          </Row>
        </Container>
      </section>

    </>
  )
}

export default Aboutpage