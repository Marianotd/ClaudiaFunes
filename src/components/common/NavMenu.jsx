import React, { useEffect, useState } from 'react'
// Componentes
import NavMenuButton from './NavMenuButton';
// React Icons
import { CgClose } from "react-icons/cg";

export default function NavMenu() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        setOpen(false)
    }, [])

    const linkList = [
        { url: "", text: "Ilustraciones" },
        { url: "", text: "Tarot" },
        { url: "", text: "Astrología" },
        { url: "", text: "Cursos" },
        { url: "", text: "Tatuajes" },
        { url: "", text: "Contacto" },
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
                                <a
                                    key={link.text}
                                    className='drawer__nav--link'
                                    href={link.url}
                                    onClick={() => setOpen(false)}
                                >
                                    {link.text}
                                </a>
                            )
                        })
                    }
                </nav>
            </div>
        </div>
    )
}
