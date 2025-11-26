import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import '../styles/about.css'
import '../styles/responsive.css'

// About Section Images
import about1 from '../images/about1.png';
import about2 from '../images/about2.png';
import about3 from '../images/about3.png';



function Aboutpage() {
  return (
    <>
      <section id='about' className='p-4'>
        <Container fluid>
          <Row className=''>

            <Col md={6} className='pt-md-2 d-flex justify-content-center'>
              <Row className='justify-content-center d-flex g-0' >
                <Col xs={6}>
                  <Image src={about1} fluid alt="example" className='h-100' />
                </Col>

                <Col xs={6} className='d-flex flex-column'>
                  <Image src={about2} fluid alt="example" className='w-75 mx-auto' />
                  <Image src={about3} fluid alt="example" className='w-75 mt-2 mx-auto' />
                </Col>
              </Row>
            </Col>


            <Col md={6} className='text-md-start text-center p-3'>
              <h5 id='ahead'>WHO WE ARE</h5>
              <h1 id='ahead1' className='my-4'>
                Luxury Without the <br /> Lifetime Price Tag
              </h1>

              <p id='apara1' className='py-3'>
                Zorucci is a luxury bridal wear brand based in Kerala, dedicated to curating exquisite bridal fashion. Since 2018, we’ve served thousands of brides with personalized styling, couture craftsmanship, and timeless bridal elegance. From traditional to modern, Zorucci combines heritage-rich details with contemporary design.
              </p>

              <p id='apara1' className='py-3'>
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