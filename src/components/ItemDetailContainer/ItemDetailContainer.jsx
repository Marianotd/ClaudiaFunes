import React, { useState, useEffect } from 'react'
// Router
import { useParams } from 'react-router-dom'
// Firebase
import { getSingleItem } from '../../services/firestore'
// Componentes
import ItemDetail from '../ItemDetail/ItemDetail'

export default function ItemDetailContainer() {
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true);
    const { id } = useParams()

    useEffect( () => {
      setLoading(true)

      getSingleItem(id).then((responseData) => {
          setData(responseData)
          setLoading(false)
        } )
      }, [id])

  return (
    <div className='itemDetailContainer p-4'>
        <ItemDetail loading={loading} data={data} initial={2} medidas={'297 x 420'} color={'Blanco'} color2={'Negro'} tinta={'Negro y Dorado'} tinta2={'Negro y Tornasol'} />
    </div>

  )
}
