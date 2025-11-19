// React & Bootstrap Core
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Image } from 'react-bootstrap';
import { useState } from "react";
import React from 'react'
import '../styles/design.css'
import '../styles/responsive.css'


// Design Section Images
import designimg1 from '../images/designimg1.png';
import designimg2 from '../images/designimg2.png';
import designimg3 from '../images/designimg3.png';
import designimg4 from '../images/designimg4.png';


function Designpage() {
  return (
    <>
          <Container>
        <Row className='px-md-0 px-3'>
          <Col md={6} sm={12} className='align-items-center text-center py-5'>
            <Image id='designimg1' src={designimg1} alt='' fluid className='d-md-block d-none' style={{ width: "467px", height: "571px" }} />
            <Image id='designimg1' src={designimg1} alt='' fluid className='d-block d-md-none ms-4' style={{ width: "287px", height: "350px" }} />

          </Col>
          <Col md={6} sm={12} >
            <div className='align-items-center text-center py-5 mt-md-5'>
              <div className='text-md-start'>
                <p id='dhead1'>CUSTOM DESIGN SERVICES</p>
                <h2 id='dhead2'>Bespoke <br /> Bridal Fashion</h2>

              </div>
              <div className='text-start py-3'>
                <p className='dpara'>Zorucci specializes in custom bridal wear design. Whether you envision a modified neckline, added embellishments, or a unique fabric, our designers bring your dream dress to life.</p>
                <p className='dpara'>From initial sketches to final fittings, your outfit is crafted exclusively for you.</p>
              </div>
              <div>
                <Row className='text-md-start text-center ms-auto mt-md-3'>
                  <Col className=''>
                    <Image id='designimg2' src={designimg2} alt='' fluid className='d-md-block d-none' style={{ width: "54px", height: "54px" }} />
                    <Image id='designimg2' src={designimg2} alt='' fluid className='d-block d-md-none ms-4' style={{ width: "27px", height: "27px" }} />
                    <p className='dpara1'>Sketch-to-Stitch Customization</p>
                  </Col>
                  <Col className='order-md-1 order-2'>
                    <Image id='designimg3' src={designimg3} alt='' fluid className='d-md-block d-none' style={{ width: "54px", height: "54px" }} />
                    <Image id='designimg3' src={designimg3} alt='' fluid className='d-block d-md-none ms-4' style={{ width: "27px", height: "27px" }} />
                    <p className='dpara1'>Personal Fittings <br /> and Alterations</p>
                  </Col>
                  <Col className='order-md-2 order-1'>
                    <Image id='designimg4' src={designimg4} alt='' fluid className='d-md-block d-none ' style={{ width: "54px", height: "54px" }} />
                    <Image id='designimg4' src={designimg4} alt='' fluid className='d-block d-md-none ms-5' style={{ width: "27px", height: "27px" }} />
                    <p className='dpara1'>Premium Embellishments and Fabric Choices</p>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Designpage
