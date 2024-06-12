
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './components/Footer';
import Member from './pages/Member';

function App() {

  return (
    <>
       <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/member" element={<Member />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
    </>
  )
}

export default App
