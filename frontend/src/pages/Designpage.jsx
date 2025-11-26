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
      <Container className='design-container'>
        <Row className='px-md-0 mt-md-4 mt-4 px-3 align-items-stretch design-row'>
          <Col md={5} sm={12} className='d-flex align-items-center justify-content-center pt-md-0 pt-0 mb-4 mb-md-0 design-image-col'>
            <div className='design-image-wrapper'>
              <Image id='designimg1' src={designimg1} alt='' fluid className='design-image' />
            </div>
          </Col>
          <Col md={7} sm={12} className='mt-md-0 mt-3 d-flex flex-column justify-content-center design-content-col'>
            <div className='text-md-start text-center'>
              <p id='dhead1' className='mb-1 mb-md-2'>FIT AND TAILORING SERVICES</p>
              <h2 id='dhead2' className='mb-3 mb-md-3'>Perfect Bridal Fit</h2>
            </div>
            <div className='text-md-start text-center pt-md-3 pt-2'>
              <p className='dpara mb-3 mb-md-2'>Zorucci ensures every bride looks and feels her best with expert fittings and alteration support. We help refine the outfit you select from our collection so the final look feels naturally yours.</p>
              <p className='dpara mb-4 mb-md-3'>From first trial to final fitting, our team guides you through a smooth, comfortable experience.</p>
            </div>
            <div className='mt-md-3 mt-2'>
              <Row className='g-3 service-cards-row'>
                {/* Size Adjustments & Tailored Fittings */}
                <Col md={6} sm={12} className='px-md-3 px-0 d-flex'>
                  <div className='service-card w-100'>
                    <p id='dhead1' className='text-md-start text-center mb-1'>Size Adjustments & Tailored Fittings</p>
                    <p id='dpara' className='text-md-start text-center mb-0'>Personalized measurements for your perfect fit</p>
                  </div>
                </Col>

                {/* Standard Alterations */}
                <Col md={6} sm={12} className='px-md-3 px-0 d-flex'>
                  <div className='service-card w-100'>
                    <p id='dhead1' className='text-md-start text-center mb-1'>Standard Alterations</p>
                    <p id='dpara' className='text-md-start text-center mb-0'>Top length, waist, sleeves, and more</p>
                  </div>
                </Col>
              </Row>
              <Row className='g-3 mt-3 mt-md-2 service-cards-row'>
                {/* Drape Setting & Final Trial Finishing */}
                <Col md={6} sm={12} className='px-md-3 px-0 d-flex'>
                  <div className='service-card w-100'>
                    <p id='dhead1' className='text-md-start text-center mb-1'>Drape Setting & Final Trial Finishing</p>
                    <p id='dpara' className='text-md-start text-center mb-0'>Perfect draping for an elegant silhouette</p>
                  </div>
                </Col>

                {/* Comfort Adjustments */}
                <Col md={6} sm={12} className='px-md-3 px-0 d-flex'>
                  <div className='service-card w-100'>
                    <p id='dhead1' className='text-md-start text-center mb-1'>Comfort Adjustments</p>
                    <p id='dpara' className='text-md-start text-center mb-0'>Better mobility and confidence for your big day</p>
                  </div>
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