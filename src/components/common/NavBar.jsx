import React, { useEffect, useState } from 'react';
// Componentes
import Logo from './Logo';
import NavIcons from '../NavIcons/NavIcons';
import LinkList from '../list/LinkList';
import Drawer from './Drawer';
import { useLocation } from 'react-router-dom';

export default function NavBar() {
    const { pathname } = useLocation()
    const [open, setOpen] = useState(false);
    const navLinks = [
        { path: '/', label: 'Inicio' },
        { path: '/Ilustraciones', label: 'Ilustraciones' },
        { path: '/Tarot', label: 'Tarot' },
        { path: '/Astrología', label: 'Astrologia' },
        { path: '/Cursos', label: 'Cursos' },
        { path: '/Tatuajes', label: 'Tatuajes' },
        { path: '/Contacto', label: 'Contacto' },
    ]

    useEffect(() => {
        const handleScroll = () => {
            let scrollState = open ? 'hidden' : 'auto'
            document.body.style.overflow = scrollState
        }

        handleScroll()
    }, [open])

    useEffect(() => {
        setOpen(false)
    }, [pathname])

    return (
        <header className="relative flex items-center justify-between bg-main h-24 px-8">
            <Logo />

            <Drawer state={open} data={navLinks} />

            <div className='hidden lg:flex'>
                <LinkList
                    data={navLinks}
                />
            </div>

            <NavIcons
                setOpen={setOpen}
                open={open}
            />
        </header>
    )
};