import React from 'react'
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';

export default function ContactChannels() {
  return (
    <div className='flex flex-col gap-4 border border-textMain rounded-xl p-4 bg-textMain/5 mx-auto lg:w-1/2 lg:items-center'>
      <h2 className='text-center text-2xl font-bold'>Canales de contacto</h2>

      <a
        className='flex items-center gap-2 hover:text-secondary ease-out duration-300'
        href="https://www.facebook.com/"
        target={'_blank'}
        rel='noopener noreferrer'
        aria-label='Facebook de La Proporción Aurea - Por Claudia Funes'
      >
        <span>
          <BsFacebook />
        </span>
        La Proporción Aurea - Por Claudia Funes
      </a>

      <a
        className='flex items-center gap-2 hover:text-secondary ease-out duration-300'
        href="https://www.instagram.com/"
        target={'_blank'}
        rel='noopener noreferrer'
        aria-label='Instagram de La Proporción Aurea'
      >
        <span>
          <BsInstagram />
        </span>
        @LaPropAurea.CF
      </a>

      <a
        className='flex items-center gap-2 hover:text-secondary ease-out duration-300'
        href="mailto:lapropaurea.cf@gmail.com"
        aria-label='Enviar correo a La Proporción Aurea'
      >
        <span>
          <GrMail />
        </span>
        lapropaurea.cf@gmail.com
      </a>
    </div>
  )
}
