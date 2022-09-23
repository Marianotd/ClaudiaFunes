import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import getItems from '../../services/mockAPI'
import Item from '../Item/Item'

export default function ItemList() {
  const [data, setData] = useState([])
  const cat = useParams()

  useEffect( () => {
    if(cat === undefined) {
      
    }
    getItems().then((responseData) => {
      setData(responseData)
    } )
  }, [])

  return (
    <>
      {
        data.map((item) => (
            <Item
              key={item.id}
              name={item.name}
              img={item.img}
              stock={item.stock}
              price={item.price}
              description={item.description}
            />
        ))
      }
    </>

  )
}
