import React from 'react'
import Contact from './routes/Contact';
import About from './routes/About'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './routes/Home';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </Router>
    </React.Fragment>
  )
}

export default App