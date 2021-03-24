import React from 'react';
import './Footer.css';


function Footer() {
    return (
        <div className='footerarea'>
            <div className='footerarea__top'>
                <p>Back to Top</p>
            </div>
            <div className='footerarea__links'>
                <div className='footerarea__linkarea'>
                <span>About</span>
                </div>
                <div className='footerarea__linkarea'>
                <span>Where</span>
                </div>
                <div className='footerarea__linkarea'>
                <span>Sister Companies</span>
                </div>
                <div className='footerarea__linkarea'>
                <span>Policies</span>
                </div>
            </div>
        </div>

        
    )

}

export default Footer;