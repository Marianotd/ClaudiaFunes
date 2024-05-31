import React from 'react'
import Section from './Section'

export default function SectionListContainer({ items }) {
  return (
    items.map((item, index) => (
      <Section
        key={index}
        item={item}
      />
    ))
  )
}
