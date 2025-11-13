
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Landingpage from './pages/Landingpage'
import Header from './components/Header'
import Footer from './components/Footer'


function App() {

  return (
    <>
    
      <Routes>
      <Route path='/' element={<Landingpage/>}/>



     </Routes>
     <Footer/>
    </>
  )
}

export default App
