// React & Bootstrap Core
import { Image } from 'react-bootstrap';
import { useState } from "react";
import React from 'react'
import '../styles/responsive.css'
import '../styles/collection.css'


// Collection Section Images
import collectionimg1 from '../images/collectionimg1.jpg'
import collectionimg2 from '../images/collectionimg2.jpg'
import collectionimg3 from '../images/collectionimg3.jpg'
import collectionimg4 from '../images/collectionimg4.jpg'
import collectionimg5 from '../images/collectionimg5.jpg'

function Collectionpage() {

  const images = [collectionimg1, collectionimg2, collectionimg3, collectionimg4, collectionimg5];

  const text = [
    {
      h1: "OUR COLLECTIONS",
      h2: "Bridal Lehengas",
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
      h2: "Bridal Lehengas",
      p: "Our designer bridal lehengas feature intricate embroidery, zardozi, sequins, mirrorwork, and rich silks.Perfect for Indian weddings and receptions, each piece blends traditional motifs with modern silhouettes."
    }
  ];


  const [imagesArr, setImagesArr] = useState(images);
  const [textArr, setTextArr] = useState(text);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [prevImage, setPrevImage] = useState(null);


  const handleSliceClick = (clickedIndex) => {
    if (clickedIndex === 0 || isTransitioning) return;

    setIsTransitioning(true);
    setPrevImage(imagesArr[0]); // Store current image

    // Start swipe transition
    setTimeout(() => {
      const newArr = [...imagesArr];
      const clickedImage = newArr.splice(clickedIndex, 1)[0];
      newArr.unshift(clickedImage);

      setImagesArr(newArr);

      const newText = [...textArr];
      const clickedText = newText.splice(clickedIndex, 1)[0];
      newText.unshift(clickedText);

      setTextArr(newText);

      // Complete transition after animation
      setTimeout(() => {
        setIsTransitioning(false);
        setPrevImage(null);
      }, 600);
    }, 50);
  };


  return (
    <>
      <section id='collections'>
        <div className="row g-0">
          <div className="col-md-4 text-light d-flex flex-column justify-content-center align-items-start"
            style={{ backgroundColor: "#0A3F36" ,padding:"30px" }}>
            <h1 id="chead1" className={`text-white text-content ${isTransitioning ? 'slide-out' : 'slide-in'}`} style={{ transitionDelay: isTransitioning ? '0ms' : '200ms' }}>{textArr[0].h1}</h1>
            <h2 id="chead2" className={`text-content ${isTransitioning ? 'slide-out' : 'slide-in'}`} style={{ transitionDelay: isTransitioning ? '50ms' : '250ms' }}>{textArr[0].h2}</h2>
            <p id="cpara1" className={`text-content ${isTransitioning ? 'slide-out' : 'slide-in'}`} style={{ transitionDelay: isTransitioning ? '100ms' : '300ms' }}>{textArr[0].p}</p>
          </div>

          <div className="gallery-wrapper col-md-8 d-flex overflow-hidden" style={{ height: "650px" }}>

            {/* Main Image Container */}
            <div className="main-image">
              {/* Previous image sliding out */}
              {isTransitioning && prevImage && (
                <img 
                  src={prevImage} 
                  alt="" 
                  className="image-swipe-out"
                  key="prev"
                />
              )}
              {/* Current/New image sliding in */}
              <img 
                src={imagesArr[0]} 
                alt="" 
                className={isTransitioning ? 'image-swipe-in' : 'image-static'}
                key={imagesArr[0]}
              />
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
    </>
  )
}

export default Collectionpage