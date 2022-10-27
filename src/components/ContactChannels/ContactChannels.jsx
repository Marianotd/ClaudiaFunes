import React from 'react'
// ICONOS
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';

export default function ContactChannels() {
  return (
    <div className='contactChannels '>
        <h2 className='sectionTitle'>Medios de contacto</h2>
        <a href="https://www.facebook.com/" target={'_blank'}><span><BsFacebook /></span> La Proporción Aurea - Por Claudia Funes </a>
        <a href="https://www.instagram.com/" target={'_blank'}><span><BsInstagram /></span> @LaPropAurea.CF</a>
        <a href="https://mail.google.com/mail/u/0/#inbox" target={'_blank'}><span><GrMail /></span> lapropaurea.cf@gmail.com</a>
    </div>
  )
}
