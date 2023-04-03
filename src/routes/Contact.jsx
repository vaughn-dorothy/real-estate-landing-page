import React from 'react';
import Navbar from '../components/Navbar';
import '../css/Contact.css'


function Contact() {
  return (
    <React.Fragment>
      <Navbar />
      <div className='contact-container'>
        <div className='contact'> 
          <div className='align'>
            <br />email: <a href = "mailto:contact@vaughndorothy.com?subject = Inquery"> contact@vaughndorothy.com </a>
            <br />Phone: (214) 301-513
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Contact;