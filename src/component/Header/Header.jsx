import React from 'react';

import './Header.css'

const Header = () => {
    return (
        <header>
            <nav className='nav'>
                <ul>
                    <li className="item">
                        About me
                    </li>
                    <li className="item">
                        Contacts
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;