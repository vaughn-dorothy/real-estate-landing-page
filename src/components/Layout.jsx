import React from 'react';
import '../css/Layout.css'



function Layout() {
  return (
    <div className='layout-container'>
      <video autoPlay loop muted playsInline> <source src='/videos/video-2.mp4' type='video/mp4' /> 
        {/* <h1>The Future Looks Bright</h1>
       <p>We're ready for it, are you?</p> */}
      </video>
      <h1>The Future Looks Bright</h1>
      <p>We're ready for it, are you?</p>
    </div>
  );
}

export default Layout; 