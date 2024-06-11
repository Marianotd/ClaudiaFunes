import React from 'react'
import Section from './Section'
import ModalItem from '../modalItem/ModalItem'

export default function SectionListContainer({ items }) {
  return (
    items.map((item, index) => (
      <React.Fragment key={index}>
        <Section
          item={item}
        />

        <ModalItem
          item={item}
        />
      </React.Fragment>

    ))
  )
}
