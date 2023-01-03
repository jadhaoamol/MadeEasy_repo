import './App.css';
import About from './Componets/About';
import Contact from './Componets/Contact';
import Home from './Componets/Home';
import Services from './Componets/Services';
//import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <>

      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/about' element={<About />} />
          <Route exact path='/contact' element={<Contact />} />
          <Route exact path='/services' element={<Services />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
