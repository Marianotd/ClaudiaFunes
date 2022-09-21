import React, { useState, useEffect } from 'react'
import { getSingleItem } from '../../services/mockAPI'
import ItemDetail from '../ItemDetail/ItemDetail'

export default function ItemDetailContainer() {
    const [data, setData] = useState({})

    useEffect( () => {
        getSingleItem(3).then((responseData) => {
          setData(responseData)
        } )
      }, [])

  return (
    <div className='itemDetailContainer p-4'>
        <ItemDetail data = {data} />
    </div>

  )
}
