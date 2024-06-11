import React from 'react'

export default function ButtonSection({ text, url }) {
    let cadenaUrl = (url).replaceAll([" "], "-")

    return (
        <a className="buttonSection" href={cadenaUrl}>
            <svg>
                <rect x="0" y="0" width="100%" height="100%" />
            </svg>
            {text}
        </a>
    )
}
