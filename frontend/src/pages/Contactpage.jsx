// React & Bootstrap Core
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import '../styles/responsive.css'
import '../styles/contact.css'


// Contact section Images
import contactimg1 from '../images/contactimg1.jpg'

function Contactpage() {
  return (
    <>
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
    </>
  )
}

export default Contactpage