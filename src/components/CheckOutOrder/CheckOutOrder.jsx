import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getOrder } from '../../services/firestore'
/* Spiner */
import { FadeLoader } from "react-spinners";

export default function CheckOutOrder() {
    const { orderid } = useParams('orderid')
    const [order, setOrder] = useState()
    const [loader, setLoader] = useState(true)

    useEffect( () => {
        getOrder(orderid)
        .then(response => {
            let { buyer } = response
            setLoader(false)
            setOrder(buyer)
        })
    }, [orderid])

  return (
    <div className='checkOut p-4'>

        { loader
        ? <FadeLoader color={'#ccc'} size={150} height={35} width={7.5} radius={35} margin={25} />
        :     
        <>
            <h2>¡Gracias por elegirnos!</h2>
            <p><span>{order.name}</span> te hemos enviado un correo a "<span>{order.email}</span>" con la confirmación de tu compra.</p>
            <p>El número de tu compra es: <span>{orderid}</span></p>   
        </>

        }
    </div>

  )
}
