import React from 'react'

export default function FormContact() {
  return (
    <form className='form form--contact'>
        <h2 className='sectionTitle'>Formulario de contacto</h2>
        <h4>Nuestros asesores están listos para atenderte con cualquier consulta sobre tu pedido o información en general de la tienda Online.</h4>
        <input type="text" placeholder='Nombre/s y Apellido/s *' required/>
        <input type="email" placeholder='Correo electrónico *' required/>
        <input type="phone" placeholder='Teléfono *' required/>
        <label htmlFor="">Desea adjuntar algún archivo?</label>
        <input type="file"/>
        <label htmlFor="">Dejanos tu comentario:</label>
        <textarea className='py-2 px-3' cols="30" rows="12"></textarea>
        <button className='itemButton py-2' type='submit'>Enviar</button>
    </form>
  )
}
