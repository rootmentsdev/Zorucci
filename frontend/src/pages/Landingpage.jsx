// React & Bootstrap Core
import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Image } from 'react-bootstrap';

// Layout Components
import Header from '../components/Header';

// Home Page Images
import home from '../images/Home.jpg';
import home2 from "../images/homeimg2.jpg";

// About Section Images
import about1 from '../images/about1.png';
import about2 from '../images/about2.png';
import about3 from '../images/about3.png';

// Collection Section Images
import collect1 from '../images/collect1.png';
import collect2 from '../images/collect2.png';

// Design Section Images
import designimg1 from '../images/designimg1.png';
import designimg2 from '../images/designimg2.png';
import designimg3 from '../images/designimg3.png';
import designimg4 from '../images/designimg4.png';

// Icons
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoIosTimer } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";



function Landingpage() {
  return (
    <>
      {/* landing page */}
      <section id='herosection'>
        <div className='w-100 position-relative'>
          <Header />
          <Image style={{ width: "100%", height: "655px", objectFit: 'cover', objectPosition: "70% 23%" }} src={home} alt="" fluid className="" />
        </div>

        <div id='greenbg' className='w-100 position-relative ' style={{ minHeight: "500px", backgroundColor: "#0A3F36" }}></div>

        <div className='row align-items-center white-box position-absolute start-50 translate-middle-x  ms-auto' style={{ top: "63%", backgroundColor: "white", width: "80%", borderTopRightRadius: "200px", height: "488px" }}>
          <div className="col-md-8 px-md-5 d-flex flex-column justify-content-center text-center text-md-start order-md-1 order-2 mb-5">
            <h1 id='head1' className=''>Luxury Bridal Wear for the Modern Bride</h1>
            <p id='para1' className=''>
              Step into Zorucci – Kerala's leading destination for premium bridal fashion. Explore designer bridal lehengas, elegant wedding gowns, and timeless bridal sarees, all handcrafted with love and luxury in mind.Whether you’re walking the aisle or celebrating tradition, Zorucci is where your bridal dream begins.
            </p>
            <div className=' d-flex flex-column align-items-center flex-md-row gap-2 gap-md-5 my-3'>
              <button id='homebtn' className='btn  py-md-3 text-white ' style={{ width: "45%", backgroundColor: "#0A3F36" }}>
                Explore Collection
              </button>
              <button id='homebtn' className='btn py-md-3 d-flex' style={{ width: "45%", border: "none", borderBottom: "solid", borderRadius: "0px", color: "#5A2A0B" }}>
                Book Appointment <span className='ms-3'><MdArrowOutward /></span>
              </button>
            </div>

          </div>
          <div className="col-md-4 p-0 order-md-2 order-1">
            <div id='homeimg2' style={{ height: "100%", transform: "translateY(-83px)" }}>
              <Image src={home2} alt="" fluid style={{ width: "467px", height: "571px", objectFit: "cover", borderTopRightRadius: "200px", borderTopLeftRadius: "200px" }} />
            </div>
          </div>

        </div>
      </section>

      {/* about page  */}
      <section id='about' className='py-5'>
        <div className="container-fluid row mx-auto ">
          <div className="col-md-6 pt-md-5">
            <div className="row">
              <div className="col-6 ">
                <Image src={about1} fluid alt="example" className='h-100' />
              </div>
              <div className="col-6 d-flex flex-column">
                <Image src={about2} fluid alt="example" className='w-75' />
                <Image src={about3} fluid alt="example" className='w-75 mt-2' />
              </div>
            </div>
          </div>

          <div className="col-md-6 text-md-end text-center pt-5">
            <h5>WHO WE ARE</h5>
            <h1 id='head1' className='my-5'>"Luxury Without the
              Lifetime Price Tag"</h1>
            <p id='para1' className='py-3'>Zorucci is a luxury bridal wear brand based in Kerala, dedicated to curating exquisite bridal fashion. Since 2018, we’ve served thousands of brides with personalized styling, couture craftsmanship, and timeless bridal elegance. From traditional to modern, Zorucci combines heritage-rich details with contemporary design.</p>
            <p id='para1' className='py-3'>With four showrooms across Kochi, Perinthalmanna, Kottakkal, and Edappal, we bring curated collections and expert stylists to brides across India.</p>
          </div>
        </div>
      </section>

      {/* collection page */}
      <section id='collections'>
        <div className="row g-0">
          <div className="col-md-4 text-light px-5 py-5 d-flex flex-column justify-content-center align-items-start" style={{ backgroundColor: "#0A3F36" }}>
            <p id='chead1' className='text-white'>OUR COLLECTIONS</p>
            <p id='chead2'>Bridal Lehangas</p>
            <p id='para1'>Our designer bridal lehengas feature intricate embroidery, zardozi, sequins, mirrorwork, and rich silks.Perfect for Indian weddings and receptions, each piece blends traditional motifs with modern silhouettes.</p>
          </div>
          <div className="col-md-8">
            <Image id='colectimg1' src={collect1} alt="" fluid style={{ width: "100%", height: "649px", objectFit: "cover" }} />
          </div>
        </div>
      </section>

      {/* jewelry page */}
      <section id='jewelry'>
        <div className="row g-0">
          <div className="col-md-8 order-md-1 order-2">
            <Image id='collectimg2' src={collect2} alt="" fluid style={{ width: "100%", height: "649px", objectFit: "cover" }} />
          </div>
          <div className="col-md-4 px-5 py-5 text-light d-flex flex-column justify-content-center align-items-start order-md-2 order-1 " style={{ backgroundColor: "#0A3F36" }}>
            <p id='chead1' className='text-white'>JEWELS BY ZORUCCIS</p>
            <p id='chead2'>Complete Your Bridal Look</p>
            <p id='para1'>Explore our jewelry rentals and find the perfect match for your outfit.</p>
          </div>

        </div>
      </section>

      {/* custom design page */}
      <Container>
        <Row>
          <Col md={6} sm={12} className='align-items-center text-center py-5'>
            <Image id='designimg1' src={designimg1} alt='' fluid className='d-md-block d-none' style={{ width: "467px", height: "571px" }} />
            <Image id='designimg1' src={designimg1} alt='' fluid className='d-block d-md-none ms-5' style={{ width: "287px", height: "350px" }} />

          </Col>
          <Col md={6} sm={12} >
            <div className='align-items-center text-center py-5'>
              <div className='text-md-end'>
                <p id='chead1'>CUSTOM DESIGN SERVICES</p>
                <p id='chead2'>Bespoke</p>
                <p id='chead2'>Bridal Fashion</p>
              </div>
              <div className='text-md-start py-5'>
                <p id='para1'>Zorucci specializes in custom bridal wear design. Whether you envision a modified neckline, added embellishments, or a unique fabric, our designers bring your dream dress to life.</p>
                <p id='para1'>From initial sketches to final fittings, your outfit is crafted exclusively for you.</p>
              </div>
              <div>
                <Row className='text-md-start text-center ms-auto'>
                  <Col className=''>
                    <Image id='designimg2' src={designimg2} alt='' fluid className='d-md-block d-none' style={{ width: "54px", height: "54px" }} />
                    <Image id='designimg2' src={designimg2} alt='' fluid className='d-block d-md-none ms-4' style={{ width: "27px", height: "27px" }} />
                    <p>Sketch-to-Stitch Customization</p>
                  </Col>
                  <Col className='order-md-1 order-2'>
                    <Image id='designimg3' src={designimg3} alt='' fluid className='d-md-block d-none' style={{ width: "54px", height: "54px" }} />
                    <Image id='designimg3' src={designimg3} alt='' fluid className='d-block d-md-none ms-4' style={{ width: "27px", height: "27px" }} />
                    <p>Personal Fittings and Alterations</p>
                  </Col>
                  <Col className='order-md-2 order-1'>
                    <Image id='designimg4' src={designimg4} alt='' fluid className='d-md-block d-none' style={{ width: "54px", height: "54px" }} />
                    <Image id='designimg4' src={designimg4} alt='' fluid className='d-block d-md-none ms-4' style={{ width: "27px", height: "27px" }} />
                    <p>Premium Embellishments and Fabric Choices</p>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* location page */}
      <Container id='location' className='d-md-flex flex-column justify-content-center ' >
        <div className='text-md-start text-center'>
          <p id='chead1'>OUR LOCATIONS</p>
          <p id='chead2'>Visit Us,<br />Experience Luxury</p>
        </div>
        <Row className='gap-md-0 gap-4'>

          <Col md={3} sm={12}>
            <Card className='text-white' style={{ width: '100%', backgroundColor: "#0A3F36", height: "225px" }}>
              <Card.Body>
                <Card.Title className='text-center my-3' id='lhead'>Zorucci Kochi</Card.Title>
                <div className='d-flex py-2'>
                  <span><HiOutlineLocationMarker /></span>
                  <Card.Text id='lpara' className='ms-2'>
                    Metro Piller No 366, Chilton Tower, Road, Koonamthai, Edappally, Kochi, Kerala 682024
                  </Card.Text>
                </div>
                <div className='d-flex mt-2'>
                  <span><IoIosTimer /></span>
                  <Card.Text id='lpara1' className='ms-2'>Mon-Sun | 10:00am - 08:30pm
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3} sm={12}>
            <Card className='text-white' style={{ width: '100%', backgroundColor: "#0A3F36", height: "225px" }}>
              <Card.Body>
                <Card.Title className='text-center my-3' id='lhead'>Zorucci Perinthalmanna</Card.Title>
                <div className='d-flex py-2'>
                  <span><HiOutlineLocationMarker /></span>
                  <Card.Text id='lpara' className='ms-2'>
                    Sahara Complex, Mysuru - Ooty Rd, Valiyangadi, Perinthalmanna, Kerala 679322
                  </Card.Text>
                </div>
                <div className='d-flex mt-2'>
                  <span><IoIosTimer /></span>
                  <Card.Text id='lpara1' className='ms-2'>Mon-Sun | 10:00am - 08:30pm
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>


          <Col md={3} sm={12}>
            <Card className='text-white' style={{ width: '100%', backgroundColor: "#0A3F36", height: "225px" }}>
              <Card.Body>
                <Card.Title className='text-center my-3' id='lhead'>Zorucci Edappal</Card.Title>
                <div className='d-flex py-2'>
                  <span><HiOutlineLocationMarker /></span>
                  <Card.Text id='lpara' className='ms-2'>
                    Calicut Rd, Edappal, Kerala 679576
                  </Card.Text>
                </div>
                <div className='d-flex mt-2'>
                  <span><IoIosTimer /></span>
                  <Card.Text id='lpara1' className='ms-2'>Mon-Sun | 10:00am - 08:30pm
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3} sm={12}>
            <Card className='text-white' style={{ width: '100%', backgroundColor: "#0A3F36", height: "225px" }}>
              <Card.Body>
                <Card.Title className='text-center my-3' id='lhead'>Zorucci Kottakkal</Card.Title>
                <div className='d-flex py-2'>
                  <span><HiOutlineLocationMarker /></span>
                  <Card.Text id='lpara' className='ms-2'>
                    Zabeel complex Changuvetty, Kottakkal, Kerala 676503
                  </Card.Text>
                </div>
                <div className='d-flex mt-2'>
                  <span><IoIosTimer /></span>
                  <Card.Text id='lpara1' className='ms-2'>Mon-Sun | 10:00am - 08:30pm
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </Col>

          <Row className='mt-5 gap-0'>
            <Col md={6} sm={12} className='mt-md-3 text-center text-md-start'>
              <p className='mt-4' id='chead1'>WALK IN OR BOOK YOUR BRIDAL STYLING APPOINTMENT.</p>
            </Col>
            <Col md={3} sm={12} className=''>
              <button id='homebtn' className='btn py-md-3 d-flex d-md-block d-none' style={{ width: "65%", border: "none", borderBottom: "solid", borderRadius: "0px", color: "#5A2A0B" }}>
                <span><IoLogoWhatsapp className='me-4' /></span> Whatsapp<span className='ms-3'><MdArrowOutward /></span>
              </button>
              <button id='homebtn' className='btn py-md-3 text-white d-md-none d-block mx-auto' style={{ width: "80%", backgroundColor: "#0A3F36" }}>
                <span><IoLogoWhatsapp className='me-4' /></span> Whatsapp<span className='ms-3'><MdArrowOutward /></span>
              </button>
            </Col>
            <Col md={3} sm={12} >
              <button id='homebtn' className='btn py-md-3 d-flex d-md-block d-none' style={{ width: "75%", border: "none", borderBottom: "solid", borderRadius: "0px", color: "#5A2A0B" }}>
                <span><FaPhoneAlt className='me-3' /></span>+91 62350 31144<span className='ms-3'><MdArrowOutward /></span>
              </button>
              <button id='homebtn' className='btn py-md-3 d-md-none d-block mx-auto mt-3' style={{ width: "80%", backgroundColor: "rgba(0, 0, 0, 0.12)", color: "#5A2A0B" }}>
                <span><FaPhoneAlt className='me-3' /></span>+91 62350 31144<span className='ms-3'><MdArrowOutward /></span>
              </button>
            </Col>
          </Row>

        </Row>
      </Container>

      {/* contact page */}



    </>
  )
}

export default Landingpage