import React from 'react'
import Item from '../home/Item'

export default function ItemList({ data }) {
  return (
    data.map((item) => (
      <Item
        key={item.id}
        id={item.id}
        name={item.name}
        img={item.img}
        price={item.price}
        description={item.description}
        category={item.category}
      />
    ))
  )
}
