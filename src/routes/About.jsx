import React from 'react';
import Navbar from '../components/Navbar';
import '../css/About.css'

function About() {
  return (
    <React.Fragment>
      <Navbar />
      <div className='about-container'>
        <div className='about'> We're young, but we're growing fast. Our mission is to provide the best quality to our customers, and we will not stop until we complete that mission. We have a strategic real estate plan to start small, and eventually expand into bigger marks. So join us on this journey, we promise it will be a fulfilling one.</div>
      </div>
    </React.Fragment>
  );
}

export default About;