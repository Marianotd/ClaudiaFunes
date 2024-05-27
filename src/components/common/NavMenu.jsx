import React, { useEffect, useState } from 'react'
// Componentes
import NavMenuButton from './NavMenuButton';
// React Icons
import { CgClose } from "react-icons/cg";
// React-router
import { Link } from 'react-router-dom';

export default function NavMenu() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(false)
    }, [])

    const linkList = [
        { url: "/Productos/Ilustraciones", text: "Ilustraciones" },
        { url: "/Productos/Tarot", text: "Tarot" },
        { url: "/Productos/Astrologia", text: "Astrología" },
        { url: "/Productos/Cursos", text: "Cursos" },
        { url: "/Productos/Tatuajes", text: "Tatuajes" },
        { url: "/Contacto", text: "Contacto" },
    ];

    return (
        <div>
            <NavMenuButton state={open} setter={setOpen} />
            <div className={`drawer ${open ? 'drawer--open' : ''}`}>

                <nav className="drawer__nav">
                    <CgClose onClick={() => setOpen(false)} className='closeButton' />
                    {
                        linkList.map(link => {
                            return (
                                <Link
                                    key={link.text}
                                    className='drawer__nav--link'
                                    to={link.url}
                                    onClick={() => setOpen(false)}
                                >
                                    {link.text}
                                </Link>
                            )
                        })
                    }
                </nav>
            </div>
        </div>
    )
}
