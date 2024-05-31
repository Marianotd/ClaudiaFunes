import React from 'react';
// Componentes
import NavMenu from './NavMenu';
import Brand from './Brand';

export default function Header() {
    const title = "La Proporción Aurea";

    return (
        <header id='inicio' className="header">
            <Brand title={title} />

            <NavMenu />
        </header>
    )
};