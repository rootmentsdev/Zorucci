// React & Bootstrap Core

import { Image } from 'react-bootstrap';

import React from 'react'
import '../styles/jewelry.css'
import '../styles/responsive.css'

// Jewelry Section Images
import jewelryimg2 from '../images/jewelryimg2.png'


function Jewelrypage() {
  return (
    <>
          <section id='jewelry'>
        <div className="row g-0">
          <div className="col-md-8 order-md-1 order-2">
            <Image id='collectimg2' src={jewelryimg2} alt="" fluid style={{ width: "100%", height: "649px", objectFit: "cover" }} />
          </div>
          <div className="col-md-4  text-light d-flex flex-column justify-content-center align-items-start order-md-2 order-1 " style={{ backgroundColor: "#0A3F36",padding:"30px"  }}>
            <p id='jhead1' className='text-white'>JEWELS BY ZORUCCI</p>
            <p id='jhead2'>Complete Your Bridal Look</p>
            <p id='jpara1'>Explore our jewelry rentals and find the perfect match for your outfit.</p>
          </div>

        </div>
      </section>
    </>
  )
}

export default Jewelrypage