import React from 'react'
import { Link } from 'react-router-dom'

export default function NavLink({ label, path }) {
    return (
        <Link to={path}>
            {label}
        </Link>
    )
}
