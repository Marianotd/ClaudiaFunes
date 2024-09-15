import React from 'react'
import { useNavigate } from 'react-router-dom'
import { IoArrowBackSharp } from "react-icons/io5";

export default function BackButton() {
    const navigate = useNavigate()

    return (
        <button
            onClick={() => navigate(-1)}
            aria-label='Volver atrás'
            className='flex items-center self-start gap-2 px-5 py-4 text-2xl border-2 border-textMain hover:border-main hover:text-main hover:bg-textMain rounded-full ease-out duration-300'
        >
            <IoArrowBackSharp />
        </button>
    )
}
