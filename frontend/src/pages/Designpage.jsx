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
      <Container className='pb-5 pb-md-5'>
        <Row className='px-md-0 mt-4 px-4 align-items-center'>
          <Col md={5} sm={12} className='d-flex align-items-center justify-content-center justify-content-md-start pt-3'>
            <Image id='designimg1' src={designimg1} alt='' fluid className='d-md-block d-none' style={{ width: "467px", height: "572px" }} />
            <Image id='designimg1' src={designimg1} alt='' fluid className='d-block d-md-none' style={{ width: "287px", height: "350px" }} />
          </Col>
          <Col md={7} sm={12} className='mt-4 d-flex flex-column justify-content-center'>
            <div className='text-md-start text-center'>
              <p id='dhead1'>FIT AND TYLING SERVICES</p>
              <h2 id='dhead2'>Perfect Bridal Fit</h2>
            </div>
            <div className='text-md-start text-center pt-4'>
              <p className='dpara'>Zorucci ensures every bride looks and feels her best with expert fittings and alteration support. We help refine the outfit you select from our collection so the final look feels naturally yours.</p>
              <p className='dpara'>From first trial to final fitting, our team guides you through a smooth, comfortable experience.</p>
            </div>
            <div className='mt-4 mb-5'>
              <Row className='g-3'>
                {/* Size Adjustments & Tailored Fittings */}
                <Col md={6} sm={12} className='p-md-3 p-2 mb-3' style={{ border: "1px solid #D8D8D8", borderRadius: "23px" }}>
                  <p id='dhead1' className='text-md-start text-center mb-2'>Size Adjustments & Tailored Fittings</p>
                  <p id='dpara' className='text-md-start text-center mb-0'>Personalized measurements for your perfect fit</p>
                </Col>

                {/* Standard Alterations */}
                <Col md={6} sm={12} className='p-md-3 p-2 mb-3' style={{ border: "1px solid #D8D8D8", borderRadius: "23px" }}>
                  <p id='dhead1' className='text-md-start text-center mb-2'>Standard Alterations</p>
                  <p id='dpara' className='text-md-start text-center mb-0'>Top length, waist, sleeves, and more</p>
                </Col>
              </Row>
              <Row className='g-3 mt-3 mb-4'>
                {/* Drape Setting & Final Trial Finishing */}
                <Col md={6} sm={12} className='p-md-3 p-2 mb-3' style={{ border: "1px solid #D8D8D8", borderRadius: "23px" }}>
                  <p id='dhead1' className='text-md-start text-center mb-2'>Drape Setting & Final Trial Finishing</p>
                  <p id='dpara' className='text-md-start text-center mb-0'>Perfect draping for an elegant silhouette</p>
                </Col>

                {/* Comfort Adjustments */}
                <Col md={6} sm={12} className='p-md-3 p-2 mb-3' style={{ border: "1px solid #D8D8D8", borderRadius: "23px" }}>
                  <p id='dhead1' className='text-md-start text-center mb-2'>Comfort Adjustments</p>
                  <p id='dpara' className='text-md-start text-center mb-0'>Better mobility and confidence for your big day</p>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Designpage