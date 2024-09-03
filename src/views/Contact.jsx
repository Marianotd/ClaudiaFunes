import React from 'react'
import FormContact from '../components/contact/FormContact'
import ContactChannels from '../components/contact/ContactChannels'

export default function Contact() {
  return (
    <div className='flex flex-col gap-6 p-4 min-h-screen'>
      <FormContact />
      <ContactChannels />
    </div>
  )
}
