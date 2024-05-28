import React from 'react';
// Componentes
import NavMenu from './NavMenu';
// React-router
import { Link } from 'react-router-dom';

export default function Header() {
    return(
        <header className="header">
            <Link className='header__brand' to='/'>
                <h3>La Proporción Aurea</h3>
            </Link>

            <NavMenu/>
        </header>
    )
};