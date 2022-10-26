import React, { memo } from 'react';
import '../styles/Footer.css'
const Footer = memo(() => {
    // console.log("render footer");
    return (
        <div className='footer'>
            <div>Elecard test by Danil Miroshnikov</div> 
            <div>github.com/SilentArrtist</div>
        </div>
    );
});

export default Footer;