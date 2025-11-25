// React & Bootstrap Core
import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import { useState } from "react";
import '../styles/responsive.css'
import '../styles/faq.css'

function Faqpage() {

  const faq = [
    {
      q: "Where can I buy premium bridal lehengas in Kerala?",
      a: "Visit any of Zorucci's four showrooms for a curated collection of luxury bridal lehengas."
    },
    {
      q: "Does Zorucci offer custom bridal outfits?",
      a: "Yes! We offer full customization including design modifications, fabric selection, and fittings."
    },
    {
      q: "Do you offer wedding gowns for Christian ceremonies?",
      a: "Yes. Zorucci specializes in elegant wedding gowns for Christian weddings and receptions."
    },
    {
      q: "What bridal outfit types does Zorucci offer?",
      a: "Designer bridal lehengas, custom wedding gowns, and premium bridal sarees."
    },
    {
      q: "Can I book an appointment online or by phone?",
      a: "Yes. Call or WhatsApp +91 6235031144 to book your appointment."
    }
  ];

  const [faqindex, setFaqIndex] = useState(null);

  const toggleFaq = (i) => {
    setFaqIndex(faqindex === i ? null : i);
  };



  return (
    <>
      <Container id='faq'>
        <Row className='mt-5 g-0 px-3'>
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
                    <span className='px-2'>{faqindex === i ? "-" : "+"}</span>
                  </div>

                  <div className={`faq-answer ${faqindex === i ? "open" : "close"}`}>
                    <p id='fpara1'>{item.a}</p>
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

export default Faqpage