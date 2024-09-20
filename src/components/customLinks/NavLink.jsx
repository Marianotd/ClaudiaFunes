import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function NavLink({ label, path, isDrawer }) {
    const { pathname } = useLocation()

    const handleLink = () => {
        if (path === '/') {
            return pathname === '/';
        }
        return pathname.includes(path);
    };

    const baseClasses = 'py-2 w-24 ease-out duration-300'
    const drawerClasses = isDrawer
        ? handleLink() ? "font-semibold scale-105 underline underline-offset-4" : ""
        : `text-center text-sm font-semibold hover:scale-105 ${handleLink() ? "scale-105 border-y-2 border-textMain" : ""}`;

    const finalClasses = `${baseClasses} ${drawerClasses}`;

    return (
        <Link to={path} className={finalClasses} >
            {label}
        </Link>
    )
}
