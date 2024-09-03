import React from 'react'
// Componentes
import FormContact from './FormContact'
import ContactChannels from './ContactChannels'

export default function Contact() {
  return (
    <div className='contactContainer'>
        <ContactChannels />
        <FormContact />
    </div>
  )
}
