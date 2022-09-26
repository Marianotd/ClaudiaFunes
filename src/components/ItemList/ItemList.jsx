import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import getItems, { getItemsByCategory } from '../../services/mockAPI'
import Item from '../Item/Item'

export default function ItemList() {
  const [data, setData] = useState([])
  let {cat} = useParams()

  useEffect( () => {
    if(cat === undefined) {
      cat = true
      getItemsByCategory(cat).then((responseData) => {
        setData(responseData)
      } )
    } else {
      getItemsByCategory(cat).then((responseData) => {
        setData(responseData)
      } )
    }
  }, [cat])

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
              category={item.category}
            />
        ))
      }
    </>

  )
}
