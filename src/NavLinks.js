import React from 'react';
import { Link } from 'react-router-dom';
import './NavLinks.css';


function NavLinks() {
    return (
        <div className='navlinks'>
            <div class='navlinks__outer'>
                <dic className='navlinks__inner'>
                <Link>Some-Link</Link>
                <Link>Another-Link</Link>
                <Link>Another-Link</Link>
                <Link>Another-Link</Link>
                </dic>
            </div>
        </div>
    )
}

export default NavLinks;