import React from 'react'
import Logo from '../common/Logo'
import LinkList from '../list/LinkList'

export default function Footer() {
    const footerLinks = [
        {
            title: 'Redes sociales',
            isExternal: true,
            links: [
                { label: 'Instagram', path: 'https://www.instagram.com/' },
                { label: 'Facebook', path: 'https://es-la.facebook.com/' },
                { label: 'Twitter', path: 'https://twitter.com/' },
                { label: 'Pinterest', path: 'https://ar.pinterest.com/' },
                { label: 'Whatsapp', path: 'https://api.whatsapp.com/send/?phone=5492612483644&text&type=phone_number&app_absent=0' },
            ],
        },

        {
            title: 'Categorias',
            isExternal: false,
            links: [
                { label: 'Ilustraciones', path: '/Ilustraciones' },
                { label: 'Tarot', path: '/Tarot' },
                { label: 'Astrología', path: '/Astrología' },
                { label: 'Cursos', path: '/Cursos' },
                { label: 'Tatuajes', path: '/Tatuajes' },
            ],
        },
    ]

    return (
        <footer className="max-w-[1220px] mx-auto p-4 text-center flex flex-col gap-6">
            <Logo />

            <nav className='grid grid-cols-2'>
                {
                    footerLinks.map((linkGroup, index) => (
                        <div
                            key={`${index}-${linkGroup.title}`}
                            className='flex flex-col items-center gap-2'
                        >
                            <h4 className="text-lg font-semibold">{linkGroup.title}</h4>
                            <LinkList data={linkGroup.links} isFooter={true} isExternal={linkGroup.isExternal} />
                        </div>
                    ))
                }
            </nav>
        </footer>
    )
}
