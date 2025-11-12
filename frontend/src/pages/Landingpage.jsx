import React from 'react'
import home from '../images/Home.jpg'
import { Image } from 'react-bootstrap'
import Header from '../components/Header'
function Landingpage() {
  return (
    <>
    <div>

       <div className='w-100'>
         <Header/>
       <Image style={{width:"100%", height:"655px" , objectFit:'cover', objectPosition:"70% 30%"}} src={home} alt="" fluid className=""/>
       </div>
       <div className='w-100' style={{height:"345px", backgroundColor:"hsla(122, 44%, 13%, 1.00)"}}>
          
       </div>
    </div>
    
    </>
  )
}

export default Landingpage