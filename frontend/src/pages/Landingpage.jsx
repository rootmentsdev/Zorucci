// React & Bootstrap Core
import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Image } from 'react-bootstrap';
import { useState } from "react";

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
import collectionimg1 from '../images/collectionimg1.jpg'
import collectionimg2 from '../images/collectionimg2.jpg'
import collectionimg3 from '../images/collectionimg3.jpg'
import collectionimg4 from '../images/collectionimg4.jpg'
import collectionimg5 from '../images/collectionimg5.jpg'


// Jewelry Section Images
import jewelryimg2 from '../images/jewelryimg2.png';

// Design Section Images
import designimg1 from '../images/designimg1.png';
import designimg2 from '../images/designimg2.png';
import designimg3 from '../images/designimg3.png';
import designimg4 from '../images/designimg4.png';

// Contact section Images
import contactimg1 from '../images/contactimg1.jpg'

// Icons
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoIosTimer } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdArrowOutward } from "react-icons/md";



function Landingpage() {

  // 1️⃣ FIRST — Arrays
  const images = [collectionimg1, collectionimg2, collectionimg3, collectionimg4, collectionimg5];

  const text = [
    {
      h1: "OUR COLLECTIONS",
      h2: "Bridal Lehangas",
      p: "Our designer bridal lehengas feature intricate embroidery, zardozi, sequins, mirrorwork, and rich silks.Perfect for Indian weddings and receptions, each piece blends traditional motifs with modern silhouettes."
    },
    {
      h1: "OUR COLLECTIONS",
      h2: "Wedding Gowns",
      p: "Zorucci wedding gowns are crafted with delicate lace, flowy tulle, and luxurious satin. Perfect for church weddings or destination nuptials. Designed for elegance, fit for a queen."
    },
    {
      h1: "OUR COLLECTIONS",
      h2: "Bridal Sarees",
      p: "From Kanjivaram silk to embroidered net, our bridal sarees fuse cultural authenticity with haute couture. Fully customizable, tailored to your story."
    },
    {
      h1: "OUR COLLECTIONS",
      h2: "Brides Maid Dresses",
      p: "Our designer bridal lehengas feature intricate embroidery, zardozi, sequins, mirrorwork, and rich silks.Perfect for Indian weddings and receptions, each piece blends traditional motifs with modern silhouettes."
    },
    {
      h1: "OUR COLLECTIONS",
      h2: "Bridal Lehangas",
      p: "Our designer bridal lehengas feature intricate embroidery, zardozi, sequins, mirrorwork, and rich silks.Perfect for Indian weddings and receptions, each piece blends traditional motifs with modern silhouettes."
    }
  ];

  // 2️⃣ THEN — States
  const [imagesArr, setImagesArr] = useState(images);
  const [textArr, setTextArr] = useState(text);

  // 3️⃣ THEN — Handlers
  const handleSliceClick = (clickedIndex) => {
    if (clickedIndex === 0) return;

    const newArr = [...imagesArr];
    const clickedImage = newArr.splice(clickedIndex, 1)[0];
    newArr.unshift(clickedImage);

    setImagesArr(newArr);

    const newText = [...textArr];
    const clickedText = newText.splice(clickedIndex, 1)[0];
    newText.unshift(clickedText);

    setTextArr(newText);
  };


  // faq 
  const faq = [
    {
      q: "Where can I buy premium bridal lehengas in Kerala?",
      a: "You can explore Zorucci’s designer bridal lehengas available exclusively at our Kerala boutique."
    },
    {
      q: "Does Zorucci offer custom bridal outfits?",
      a: "Yes, we provide full customization options for bridal lehengas, sarees, and gowns."
    },
    {
      q: "Do you offer wedding gowns for Christian ceremonies?",
      a: "Absolutely! We have elegant Christian wedding gowns tailored for modern brides."
    },
    {
      q: "What bridal outfit types does Zorucci offer?",
      a: "We offer lehengas, sarees, gowns, engagement outfits, and reception wear."
    },
    {
      q: "Can I book an appointment online or by phone?",
      a: "Yes, you can book through our website or contact us directly via phone."
    }
  ];

  const [faqindex, setFaqIndex] = useState(null);

  const toggleFaq = (i) => {
    setFaqIndex(faqindex === i ? null : i);
  };


  return (
    <>

      {/* landing page */}
      <section id='herosection'>
        <div className='w-100 position-relative'>
          <Header />
          <Image
            style={{ width: "100%", height: "655px", objectFit: "cover", objectPosition: "70% 23%" }}
            src={home}
            alt=""
            fluid
          />
        </div>

        <div
          id='greenbg'
          className='w-100 position-relative'
          style={{ minHeight: "500px", backgroundColor: "#0A3F36" }}
        ></div>

        <Container
          className='white-box position-absolute start-50 translate-middle-x'
          style={{
            top: "63%",
            backgroundColor: "white",
            width: "80%",
            borderTopRightRadius: "200px",
            height: "488px",
          }}
        >
          <Row className='align-items-center'>
            <Col
              md={8}
              className='px-md-5 d-flex flex-column justify-content-center text-center text-md-start order-md-1 order-2 mb-5'
            >
              <h1 id='head1'>Luxury Bridal Wear for the Modern Bride</h1>

              <p id='para1'>
                Step into Zorucci – Kerala's leading destination for premium bridal fashion. Explore designer
                bridal lehengas, elegant wedding gowns, and timeless bridal sarees, all handcrafted with love and
                luxury in mind. Whether you’re walking the aisle or celebrating tradition, Zorucci is where your
                bridal dream begins.
              </p>

              <div className='d-flex flex-column align-items-center flex-md-row gap-2 gap-md-5 my-3'>
                {/* Large screen Explore button */}
                <button
                  id='homebtn'
                  className='btn py-md-3 text-white d-md-block d-none'
                  style={{ width: "45%", backgroundColor: "#0A3F36" }}
                >
                  Explore Collection
                </button>

                {/* Mobile Explore button */}
                <button
                  id='homebtn'
                  className='btn my-3 py-md-3 text-white d-md-none d-block order-md-1 order-2'
                  style={{ width: "60%", backgroundColor: "#0A3F36" }}
                >
                  Explore Collection
                </button>

                {/* Large screen Book button */}
                <button
                  id='homebtn'
                  className='btn py-md-3 d-flex d-md-block d-none'
                  style={{
                    width: "45%",
                    border: "none",
                    borderBottom: "solid",
                    borderRadius: "0px",
                    color: "#5A2A0B",
                  }}
                >
                  Book Appointment{" "}
                  <span>
                    <MdArrowOutward className='ms-5 mb-1' />
                  </span>
                </button>

                {/* Mobile Book button */}
                <button
                  id='homebtn'
                  className='btn py-md-3 d-flex d-md-none d-block order-md-2 order-1'
                  style={{
                    width: "60%",
                    border: "none",
                    borderBottom: "solid",
                    borderRadius: "0px",
                    color: "#5A2A0B",
                  }}
                >
                  Book Appointment{" "}
                  <span>
                    <MdArrowOutward className='ms-3 mb-1' />
                  </span>
                </button>
              </div>
            </Col>

            <Col md={4} className='p-0 order-md-2 order-1'>
              <div id='homeimg2' style={{ height: "100%", transform: "translateY(-83px)" }}>
                <Image
                  src={home2}
                  alt=""
                  fluid
                  style={{
                    width: "480px",
                    height: "571px",
                    objectFit: "cover",
                    borderTopRightRadius: "200px",
                    borderTopLeftRadius: "200px",
                  }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* about page */}
      <section id='about' className='py-5'>
        <Container fluid>
          <Row className='mx-auto'>

            {/* Left side images */}
            <Col md={6} className='pt-md-5'>
              <Row>
                <Col xs={6}>
                  <Image src={about1} fluid alt="example" className='h-100' />
                </Col>

                <Col xs={6} className='d-flex flex-column'>
                  <Image src={about2} fluid alt="example" className='w-75' />
                  <Image src={about3} fluid alt="example" className='w-75 mt-2' />
                </Col>
              </Row>
            </Col>

            {/* Right side content */}
            <Col md={6} className='text-md-start text-center pt-5'>
              <h5>WHO WE ARE</h5>
              <h1 id='head1' className='my-4'>
                Luxury Without the <br /> Lifetime Price Tag
              </h1>

              <p id='para1' className='py-3'>
                Zorucci is a luxury bridal wear brand based in Kerala, dedicated to curating exquisite bridal fashion. Since 2018, we’ve served thousands of brides with personalized styling, couture craftsmanship, and timeless bridal elegance. From traditional to modern, Zorucci combines heritage-rich details with contemporary design.
              </p>

              <p id='para1' className='py-3'>
                With four showrooms across Kochi, Perinthalmanna, Kottakkal, and Edappal, we bring curated collections and expert stylists to brides across India.
              </p>
            </Col>

          </Row>
        </Container>
      </section>

      {/* collection page */}
      <section id='collections'>
        <div className="row g-0">
          <div className="col-md-4 text-light px-5 py-5 d-flex flex-column justify-content-center align-items-start"
            style={{ backgroundColor: "#0A3F36" }}>
            <h1 id="chead1" className="text-white">{textArr[0].h1}</h1>
            <h2 id="chead2">{textArr[0].h2}</h2>
            <p id="cpara1">{textArr[0].p}</p>
          </div>

          <div className="gallery-wrapper col-md-8 d-flex overflow-hidden" style={{ height: "650px" }}>

            {/* Main Image (Always first item) */}
            <div className="main-image">
              <img src={imagesArr[0]} alt="" />
            </div>

            {/* Slices */}
            <div className="slice-group">
              {imagesArr.slice(1).map((img, idx) => (
                <div
                  className="slice"
                  key={idx}
                  onClick={() => handleSliceClick(idx + 1)}
                >
                  <img src={img} alt="" />
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* jewelry page */}
      <section id='jewelry'>
        <div className="row g-0">
          <div className="col-md-8 order-md-1 order-2">
            <Image id='collectimg2' src={jewelryimg2} alt="" fluid style={{ width: "100%", height: "649px", objectFit: "cover" }} />
          </div>
          <div className="col-md-4 px-5 py-5 text-light d-flex flex-column justify-content-center align-items-start order-md-2 order-1 " style={{ backgroundColor: "#0A3F36" }}>
            <p id='jhead1' className='text-white'>JEWELS BY ZORUCCIS</p>
            <p id='jhead2'>Complete Your Bridal Look</p>
            <p id='jpara1'>Explore our jewelry rentals and find the perfect match for your outfit.</p>
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
            <div className='align-items-center text-center py-5 mt-md-5'>
              <div className='text-md-start'>
                <p id='dhead1'>CUSTOM DESIGN SERVICES</p>
                <h2 id='dhead2'>Bespoke <br /> Bridal Fashion</h2>

              </div>
              <div className='text-md-start py-3'>
                <p id='dpara1'>Zorucci specializes in custom bridal wear design. Whether you envision a modified neckline, added embellishments, or a unique fabric, our designers bring your dream dress to life.</p>
                <p id='dpara1'>From initial sketches to final fittings, your outfit is crafted exclusively for you.</p>
              </div>
              <div>
                <Row className='text-md-start text-center ms-auto mt-md-3'>
                  <Col className=''>
                    <Image id='designimg2' src={designimg2} alt='' fluid className='d-md-block d-none' style={{ width: "54px", height: "54px" }} />
                    <Image id='designimg2' src={designimg2} alt='' fluid className='d-block d-md-none ms-4' style={{ width: "27px", height: "27px" }} />
                    <p id='dpara1'>Sketch-to-Stitch Customization</p>
                  </Col>
                  <Col className='order-md-1 order-2'>
                    <Image id='designimg3' src={designimg3} alt='' fluid className='d-md-block d-none' style={{ width: "54px", height: "54px" }} />
                    <Image id='designimg3' src={designimg3} alt='' fluid className='d-block d-md-none ms-4' style={{ width: "27px", height: "27px" }} />
                    <p id='dpara1'>Personal Fittings <br /> and Alterations</p>
                  </Col>
                  <Col className='order-md-2 order-1'>
                    <Image id='designimg4' src={designimg4} alt='' fluid className='d-md-block d-none ' style={{ width: "54px", height: "54px" }} />
                    <Image id='designimg4' src={designimg4} alt='' fluid className='d-block d-md-none ms-5' style={{ width: "27px", height: "27px" }} />
                    <p id='dpara1'>Premium Embellishments and Fabric Choices</p>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* location page */}
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


      {/* contact page */}
      <section id='contact'>
        <div style={{ backgroundImage: `url(${contactimg1})`, backgroundSize: "cover", backgroundPosition: "70% 40%", width: "100%", height: "655px", }}>
          <Row className='py-5 mx-5'>
            <Col md={6} sm={12}>

            </Col>
            <Col md={6} sm={12}>
              <Card className=" text-white text-md-start text-center p-4" style={{ backgroundColor: "#0A3F36E0" }}>
                <Card.Text>
                  <p id='Chead1'>CONTACT US</p>
                </Card.Text>
                <Card.Text>
                  <p id='Chead2' >We’d love to <br />
                    hear from you</p>
                </Card.Text>
                <form action="" className='d-flex flex-column contact-form'>
                  <input type="text" placeholder='Full Name' className='p-2 border-0 mb-2' style={{ backgroundColor: "rgba(0, 0, 0, 0.12)", borderRadius: "10px" }} />
                  <input type="text" placeholder='Phone Number' className='p-2 border-0 mb-2' style={{ backgroundColor: "rgba(0, 0, 0, 0.12)", borderRadius: "10px" }} />
                  <input type="text" placeholder='Email' className='p-2 border-0 mb-2' style={{ backgroundColor: "rgba(0, 0, 0, 0.12)", borderRadius: "10px" }} />
                  <textarea name="" id="" placeholder='Message' className='py-3 px-2 border-0 mb-2' style={{ backgroundColor: "rgba(0, 0, 0, 0.12)", borderRadius: "10px" }}></textarea>
                </form>
                <button className='btn btn-light w-50 mx-auto'><span style={{ color: "#0A3F36", fontSize: "20px" }}>Submit</span></button>
              </Card>
            </Col>
          </Row>
        </div>

      </section>

      {/* faq page */}
      <Container id='faq'>
        <Row className='mt-5 g-0'>
          <Col md={4} sm={12} >
            <div className='text-md-start text-center'>
              <p id='fhead1'>FAQ</p>
              <p id='fhead2'>For a seamless <br /> bridal experience</p>
            </div>
          </Col>

          <Col md={8} sm={12} className=''>
            <ul id='faqlist'>
              {faq.map((item, i) => (
                <li onClick={() => toggleFaq(i)} key={i}>

                  <div className='d-flex justify-content-between faq-question'>
                    <p>{item.q}</p>
                    <span className='px-3'>{faqindex === i ? "-" : "+"}</span>
                  </div>

                  <div className={`faq-answer ${faqindex === i ? "open" : "close"}`}>
                    <p>{item.a}</p>
                  </div>

                  <hr />
                </li>
              ))}
            </ul>

          </Col>
        </Row>
      </Container>

    </>
  )
}

export default Landingpage