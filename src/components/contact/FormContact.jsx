import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createMessage } from '../../services/firestore'
import { useForm } from 'react-hook-form'
import { PuffLoader } from 'react-spinners';
import emailjs from '@emailjs/browser';
import InputList from '../list/InputList'

export default function FormContact() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const formRef = useRef(null)

  const { register, handleSubmit, watch, formState: { errors } } = useForm()

  const inputList = ['user_name', 'user_email', 'user_phone']

  const sendEmails = async () => {
    const templates = ['template_vmcw5ck', 'template_mivsy1h'];
    try {
      for (const template of templates) {
        await emailjs.sendForm('service_dt7fknl', template, formRef.current, {
          publicKey: 'JVyKj_-FNFaFiqOWF',
        });
      }
    } catch (error) {
      console.error('Error al enviar el email:', error);
    }
  };

  const onSubmit = async (data) => {
    try {
      setLoading(true)
      let messageId = await createMessage(data)
      await sendEmails()
      navigate(`/contacto/${messageId}`)
    } catch (error) {
      console.error('Error en el envío del formulario:', error);
    } finally {
      setLoading(false)
    }
  }

  const inputValue = watch('message')

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col gap-6 lg:w-3/4 mx-auto'
      ref={formRef}
    >
      <h2 className='titleSection'>Contacto</h2>

      <h3
        className='text-center text-xl font-medium'
      >
        Nuestros asesores están listos para atenderte con cualquier consulta sobre tu pedido o información en general de la tienda Online.
      </h3>

      <InputList
        data={inputList}
        register={register}
        watch={watch}
        errors={errors}
      />

      <div className='flex flex-col gap-1'>
        <label htmlFor="message">Dejanos tu comentario:</label>
        <textarea
          {...register('message', {
            required: 'Por favor deja un mensaje para que podamos contactarte.',
            minLength: { value: 10, message: 'El mensaje debe tener al menos 10 caracteres.' }
          })}
          className={`border hover:border-textMain focus:border-textMain rounded-xl px-4 py-2 outline-none ease-out duration-300
          ${errors['message'] ? 'border-red-600' : inputValue ? 'border-textMain' : 'border-textMain/50'}
          `}
          cols="30"
          rows="12"
          placeholder="Escribe tu comentario aquí..."
        />
        {errors.message && <p className="text-red-600 text-sm">{errors.message.message}</p>}
      </div>

      <button
        className='myButton md:w-1/4 md:mx-auto'
        type='submit'
        disabled={loading}
      >
        {loading ? 'Enviando...' : 'Enviar'}
      </button>

      {
        loading && (
          <div className='absolute flex items-center h-full w-full bg-textMain/50 top-0 left-0'>
            <PuffLoader color='#ffe7ce' className='m-auto' size={100} />
          </div>
        )
      }
    </form>
  )
}
