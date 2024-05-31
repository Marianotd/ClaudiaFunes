import React from 'react'

export default function Brand({ title }) {
    return (
        <a className='header__brand' href='#inicio'>
            <h3>{title}</h3>
        </a>
    )
}
