import React, { useState, useEffect } from 'react'
// Router
import { useParams } from 'react-router-dom'
// Firebase
import { getOrder } from '../../services/firestore'
// Loader
import { FadeLoader } from "react-spinners";

export default function CheckOutOrder({  collection, message, message2 }) {
    const { orderid } = useParams('orderid')
    const [order, setOrder] = useState()
    const [loader, setLoader] = useState(true)

    useEffect( () => {
        getOrder(collection , orderid)
        .then(response => {
            if(collection === 'orders'){
                let { buyer } = response
                setLoader(false)
                setOrder(buyer)
            } else {
                setLoader(false)
                setOrder(response)
            }
        })
    }, [orderid])

  return (
    <div className='checkOut p-4'>

        { loader
        ? <FadeLoader color={'#ccc'} size={150} height={35} width={7.5} radius={35} margin={25} />
        :     
        <>
            <h2>¡Gracias por elegirnos!</h2>
            <p><span>{order.name}</span> te hemos enviado un correo a "<span>{order.email}</span>" {message}.</p>
            <p>El número de tu {message2} es: <span>{orderid}</span></p>   
        </>

        }
    </div>

  )
}
