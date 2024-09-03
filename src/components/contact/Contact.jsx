import React from 'react'
import FormContact from '../toCheck/FormContact'
import ContactChannels from './ContactChannels'

export default function Contact() {
  return (
    <div className='flex flex-col gap-6 p-4 min-h-screen'>
      <ContactChannels />
      <FormContact />
    </div>
  )
}
