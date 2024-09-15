import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOrder } from '../../services/firestore';
import { PuffLoader } from "react-spinners";
import { MdError } from 'react-icons/md';
import NotFound from '../../views/NotFound';

export default function CheckOutOrder({ collection, message, message2 }) {
    const { orderid } = useParams('orderid');
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                const newOrder = await getOrder(collection, orderid);

                if (newOrder === null) {
                    setNotFound(true);
                } else {
                    if (collection === 'orders') {
                        let { buyer } = newOrder;
                        setOrder(buyer);
                    } else {
                        setOrder(newOrder);
                    }
                }
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchOrder();
    }, [orderid, collection]);

    if (loading) {
        return (
            <div className="min-h-screen flex flex-col gap-4 items-center justify-center">
                <PuffLoader color='#ffe7ce' size={100} />
                <p className="text-white">Cargando archivo...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className='min-h-screen flex items-center justify-center text-xl md:text-2xl font-bold gap-4 flex-grow'>
                <MdError />
                <div>
                    <p>Ha ocurrido un error al cargar la orden.</p>
                    <p>{error.message ? error.message : "Por favor, inténtelo de nuevo más tarde."}</p>
                </div>
            </div>
        );
    }

    if (notFound) {
        return <NotFound />
    }

    return (
        <div className='min-h-screen flex flex-col justify-center p-4 gap-10 text-center lg:w-3/4 m-auto'>
            <h2 className='text-3xl font-bold tracking-wide lg:text-4xl'>¡Gracias por elegirnos!</h2>
            <p className='text-xl'>
                <span className='font-bold'>{order.user_name} </span>
                te hemos enviado un correo a "
                <span className='font-bold'>{order.user_email}</span>
                " {message}.
            </p>
            <p>El número de tu {message2} es:
                <span className='font-bold'> {orderid}</span>
            </p>
        </div>
    );
}
