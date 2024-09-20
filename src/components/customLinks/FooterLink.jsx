import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function FooterLink({ label, path, isExternal }) {
    const { pathname } = useLocation()

    const handleLink = () => {
        if (path === '/') {
            return pathname === '/';
        }
        return pathname.includes(path);
    };

    const linksClasses = `hover:font-bold ease-out duration-300 ${handleLink() ? 'font-bold' : ''}`

    return (
        isExternal ? (
            <a
                href={path}
                target='_blank'
                rel='noopener noreferrer'
                className={linksClasses}
            >
                {label}
            </a>
        ) : (
            <Link
                to={path}
                className={linksClasses}
            >
                {label}
            </Link>
        )
    )
}
