import React, { memo } from 'react';
import '../styles/Header.css'
const Header = memo(() => {
    return (
        <div className='header'>
            <div className="logo">LOGO</div>
            <ul className="header_menu">
                <li className="header_menu_item">Element 1</li>
                <li className="header_menu_item">Element 2</li>
                <li className="header_menu_item">Element 3</li>
                <li className="header_menu_item">Element 4</li>    
            </ul>
            <div className="burger" id="burger">
                <span></span>
            </div>
        </div>
    );
});

export default Header;