import React from 'react'
import { TiArrowSortedUp } from "react-icons/ti";

export default function UpButton({ buttonFunction }) {
    return (
        <button
            onClick={buttonFunction}
            className='fixed z-50 right-4 bottom-6 shadow-cardButton border border-textMain hover:border-secondary bg-secondary hover:bg-textMain text-textMain hover:text-secondary p-2 text-3xl rounded-full ease-out duration-300'
        >
            <TiArrowSortedUp />
        </button>
    )
}
