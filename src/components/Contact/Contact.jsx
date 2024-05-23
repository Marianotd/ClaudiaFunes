import React from 'react'
// Componentes
import FormContact from '../FormContact/FormContact'
import ContactChannels from '../ContactChannels/ContactChannels'

export default function Contact() {
  return (
    <div className='formContainer'>
        <ContactChannels />
        <FormContact />
    </div>
  )
}
