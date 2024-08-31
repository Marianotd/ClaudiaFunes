import React, { useEffect, useRef, useState } from 'react';
// Componentes
import Logo from './Logo';
import NavIcons from './NavIcons';
import LinkList from '../list/LinkList';
import Drawer from './Drawer';
import { useLocation } from 'react-router-dom';

export default function NavBar() {
    const drawerRef = useRef(null)
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
        const handleClickOutside = (e) => {
            if (drawerRef.current && !drawerRef.current.contains(e.target)) {
                setOpen(false);
            }
        }

        document.addEventListener('mousedown', handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])


    useEffect(() => {
        setOpen(false)
    }, [pathname])

    return (
        <header className="relative max-w-[1220px] flex items-center justify-between mx-auto h-24 px-8 lg:gap-6 text-textMain">
            <Logo />

            <div className='hidden w-full lg:flex justify-evenly items-center'>
                <LinkList
                    data={navLinks}
                    isDrawer={false}
                />
            </div>

            <NavIcons
                setOpen={setOpen}
                open={open}
            />

            <Drawer
                state={open}
                data={navLinks}
                drawerRef={drawerRef}
            />
        </header>
    )
};