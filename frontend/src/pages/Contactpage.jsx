
import React, { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import contactimg1 from '../images/contactimg1.jpg';
import '../styles/contact.css';
import '../styles/responsive.css';

function Contactpage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  setLoading(true);

  const scriptURL = "https://script.google.com/macros/s/AKfycbyofNYmzt6BAHwv5D86_VsS8hFytRsr_QtiHPBicOdaS8HAbVjdpo4ijqAbNXyMedmvxA/exec";

  // Create form data
  const formParams = new URLSearchParams();
  formParams.append("fullName", formData.fullName);
  formParams.append("phone", formData.phone);
  formParams.append("email", formData.email);
  formParams.append("message", formData.message);

  // Fire-and-forget POST request
  fetch(scriptURL, {
    method: 'POST',
    body: formParams,
    mode: 'no-cors' // Important: prevents CORS error
  });

  // Immediately reset form and reload page
  alert("Form submitted successfully!");
  setFormData({ fullName: "", phone: "", email: "", message: "" });
  setLoading(false);

  window.location.reload();
};


  return (
    <section id='contact'>
      <div
        style={{
          backgroundImage: `url(${contactimg1})`,
          backgroundSize: "cover",
          backgroundPosition: "70% 40%",
          width: "100%",
          minHeight: "655px"
        }}
      >
        <Row className='py-5 mx-5'>
          <Col md={6} sm={12}></Col>
          <Col md={6} sm={12}>
            <Card className="text-white text-md-start text-center p-4" style={{ backgroundColor: "#0A3F36E0" }}>
              <Card.Text>
                <p id='Chead1'>CONTACT US</p>
              </Card.Text>
              <Card.Text>
                <p id='Chead2'>
                  We’d love to <br />
                  hear from you
                </p>
              </Card.Text>
              <form onSubmit={handleSubmit} className='d-flex flex-column contact-form'>
                <input
                  type="text"
                  name="fullName"
                  placeholder='Full Name'
                  value={formData.fullName}
                  onChange={handleChange}
                  className='p-2 border-0 mb-2'
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.12)", borderRadius: "10px" }}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder='Phone Number'
                  value={formData.phone}
                  onChange={handleChange}
                  className='p-2 border-0 mb-2'
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.12)", borderRadius: "10px" }}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder='Email'
                  value={formData.email}
                  onChange={handleChange}
                  className='p-2 border-0 mb-2'
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.12)", borderRadius: "10px" }}
                  required
                />
                <textarea
                  name="message"
                  placeholder='Message'
                  value={formData.message}
                  onChange={handleChange}
                  className='py-3 px-2 border-0 mb-2'
                  style={{ backgroundColor: "rgba(0, 0, 0, 0.12)", borderRadius: "10px" }}
                  required
                ></textarea>
                <button type="submit" className='btn btn-light w-50 mx-auto' disabled={loading}>
                  {loading ? "Submitting..." : <span style={{ color: "#0A3F36", fontSize: "20px" }}>Submit</span>}
                </button>
              </form>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default Contactpage;
