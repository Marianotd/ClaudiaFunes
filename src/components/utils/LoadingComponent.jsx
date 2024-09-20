import React from 'react'
import { PuffLoader } from 'react-spinners'

export default function LoadingComponent() {
    return (
        <div className="min-h-80 flex flex-col gap-4 items-center justify-center">
            <PuffLoader color='#ffe7ce' size={100} />
            <p className="text-white">Cargando archivo...</p>
        </div>
    )
}
