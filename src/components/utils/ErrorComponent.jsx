import React from 'react'
import { MdError } from 'react-icons/md'

export default function ErrorComponent({ message }) {
    return (
        <div className='min-h-80 px-6 flex items-center justify-center text-xl md:text-2xl font-bold gap-4 flex-grow'>
            <MdError className='min-w-10' /> {message}
        </div>
    )
}
