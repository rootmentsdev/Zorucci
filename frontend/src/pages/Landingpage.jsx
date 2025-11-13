import React from 'react'
import home from '../images/Home.jpg'
import { Image } from 'react-bootstrap'
import Header from '../components/Header'
import home2 from "../images/Rectangle 23949 (1).png"
import about1 from '../images/about1.png'
import about2 from '../images/about2.png'
import about3 from '../images/about3.png'
import collect1 from '../images/collect1.png'
import collect2 from '../images/collect2.png'
function Landingpage() {
  return (
    <>
      {/* LANDING PAGE */}
      <section id='herosection'>
        <div className='w-100 position-relative'>
          <Header />
          <Image style={{ width: "100%", height: "655px", objectFit: 'cover', objectPosition: "70% 23%" }} src={home} alt="" fluid className="" />
        </div>

        <div className='w-100' style={{ minHeight: "345px", backgroundColor: "hsla(122, 44%, 13%, 1.00)" }}></div>

        <div className='row align-items-center white-box position-absolute start-50 translate-middle-x' style={{ top: "60%", backgroundColor: "white", width: "80%" }}>
          <div className="col-md-8 px-md-5 d-flex flex-column justify-content-center order-md-1 order-2">
            <h1 id='head1' className=''>Luxury Bridal Wear for the Modern Bride</h1>
            <p id='para1' className=''>
              Step into Zorucci – Kerala's leading destination for premium bridal fashion. Explore designer bridal lehengas, elegant wedding gowns, and timeless bridal sarees, all handcrafted with love and luxury in mind.Whether you’re walking the aisle or celebrating tradition, Zorucci is where your bridal dream begins.
            </p>
            <div className=' d-flex flex-column flex-md-row gap-2 gap-md-3 mt-3'>
              <button className='btn btn-success py-md-3 ' style={{ width: "45%" }}>
                Explore Collection
              </button>
              <button className='btn btn-outline-secondary py-md-3' style={{ width: "45%" }}>
                Book Appointment
              </button>
            </div>

          </div>
          <div className="col-md-4 p-0 order-md-2 order-1">
            <div style={{ height: "100%", transform: "translateY(-85px)" }}>
              <Image src={home2} alt="" fluid style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>

        </div>
      </section>


      {/* ABOUT  */}
      <section id='about'>
        <div className="row px-5 py-5">

          <div className="col-md-6 pt-5">
            <div className="row">
              <div className="col-6">
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
            <p id='para1' className='py-3 px-5'>Zorucci is a luxury bridal wear brand based in Kerala, dedicated to curating exquisite bridal fashion. Since 2018, we’ve served thousands of brides with personalized styling, couture craftsmanship, and timeless bridal elegance. From traditional to modern, Zorucci combines heritage-rich details with contemporary design.</p>
            <p id='para1' className='py-3 px-5'>With four showrooms across Kochi, Perinthalmanna, Kottakkal, and Edappal, we bring curated collections and expert stylists to brides across India.</p>
          </div>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section id='collections'>
        <div className="row g-0">
          <div className="col-md-4 text-light px-5 py-5 d-flex flex-column justify-content-center align-items-start" style={{backgroundColor:"hsla(122, 44%, 13%, 1.00)"}}>
             <p id='chead1'>Our Collections</p>
             <p id='chead2'>Bridal Lehangas</p>
             <p id='cpara'>Our designer bridal lehengas feature intricate embroidery, zardozi, sequins, mirrorwork, and rich silks.Perfect for Indian weddings and receptions, each piece blends traditional motifs with modern silhouettes.</p>
          </div>
          <div className="col-md-8">
            <Image id='colectimg1' src={collect1} alt="" fluid style={{ width: "100%", height: "649px", objectFit: "cover"}} />
          </div>
          
        </div>


        <div className="row g-0">
          <div className="col-md-8 order-md-1 order-2">
            <Image id='collectimg2' src={collect2} alt="" fluid style={{ width: "100%", height: "649px", objectFit: "cover" }} />
          </div>
          <div className="col-md-4 px-5 py-5 text-light d-flex flex-column justify-content-center align-items-start order-md-2 order-1 " style={{backgroundColor:"hsla(122, 44%, 13%, 1.00)"}}>
            <p id='chead1'>JEWELS BY ZORUCCIS</p>
            <p id='chead2'>Complete Your Bridal Look</p>
            <p id='cpara'>Explore our jewelry rentals and find the perfect match for your outfit.</p>
          </div>
          
        </div>
      </section>

    </>
  )
}

export default Landingpage