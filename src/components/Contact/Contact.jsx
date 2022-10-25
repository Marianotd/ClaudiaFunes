import React from 'react'
// Componentes
import FormContact from '../FormContact/FormContact'
import ContactChannels from '../ContactChannels/ContactChannels'

export default function Contact() {
  return (
    <div className='contactContainer'>
        <ContactChannels />
        <FormContact />
    </div>
  )
}
