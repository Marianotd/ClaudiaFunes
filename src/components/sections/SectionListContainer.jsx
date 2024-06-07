import React from 'react'
import Section from './Section'

export default function SectionListContainer({ items }) {
  return (
    items.slice(0,2).map((item, index) => (
      <Section
        key={index}
        item={item}
      />
    ))
  )
}
