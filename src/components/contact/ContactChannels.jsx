import React from 'react'
// ICONOS
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';

export default function ContactChannels() {
  return (
    <div className='flex flex-col gap-4 border border-textMain rounded-xl p-4 bg-textMain/5'>
      <h2 className='text-center text-2xl font-bold'>Medios de contacto</h2>

      <a
        className='flex items-center gap-2 hover:text-secondary ease-out duration-300'
        href="https://www.facebook.com/"
        target={'_blank'}
        rel='noopener noreferrer'>
        <span>
          <BsFacebook />
        </span>
        La Proporción Aurea - Por Claudia Funes
      </a>

      <a
        className='flex items-center gap-2 hover:text-secondary ease-out duration-300'
        href="https://www.instagram.com/"
        target={'_blank'}
        rel='noopener noreferrer'>
        <span>
          <BsInstagram />
        </span>
        @LaPropAurea.CF
      </a>

      <a
        className='flex items-center gap-2 hover:text-secondary ease-out duration-300'
        href="https://mail.google.com/mail/u/0/#inbox"
        target={'_blank'}
        rel='noopener noreferrer'>
        <span>
          <GrMail />
        </span>
        lapropaurea.cf@gmail.com
      </a>
    </div>
  )
}
