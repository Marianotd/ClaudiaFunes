import React from 'react'

export default function ButtonSection({ text, url }) {
    return (
        <a className="buttonSection" href={url}>
            <svg>
                <rect x="0" y="0" width="100%" height="100%" />
            </svg>
            {text}
        </a>
    )
}
