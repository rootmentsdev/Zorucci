import React from 'react'
import Landingpage from "./Landingpage";
import Aboutpage from "./Aboutpage";
import Designpage from "./Designpage";
import Collectionpage from "./Collectionpage";
import Contactpage from "./Contactpage";
import Fapage from "./Faqpage";
import Jewelrypage from "./Jewelrypage";
import Locationpage from "./Locationpage";

function Home() {
  return (
    <>
    <Landingpage/>
      <Aboutpage />
      <Designpage />
      <Collectionpage />
      <Jewelrypage />
       <Fapage/>
      <Locationpage />
      <Contactpage />
    </>
  )
}

export default Home