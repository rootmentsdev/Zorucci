import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from './pages/Home'
import Blogpage from "./pages/Blog";
import Aboutpage from "./pages/Aboutpage";



function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog-page" element={<Blogpage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
