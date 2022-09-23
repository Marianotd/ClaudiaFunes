import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleItem } from '../../services/mockAPI'
import ItemDetail from '../ItemDetail/ItemDetail'

export default function ItemDetailContainer() {
    const [data, setData] = useState({})
    const { name } = useParams()

    useEffect( () => {
        getSingleItem(name).then((responseData) => {
          setData(responseData)
        } )
      }, [])

  return (
    <div className='itemDetailContainer p-4'>
        <ItemDetail data = {data} />
    </div>

  )
}
