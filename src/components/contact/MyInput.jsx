import React from 'react'

export default function MyInput({ name, register, watch, error }) {
    const typeSelector = name === 'user_phone' ? 'tel' : name === 'user_email' ? 'email' : 'text'
    const placeholderSelector = name === 'user_phone' ? 'teléfono' : name === 'user_email' ? 'email' : 'nombre completo'
    const labelSelector = placeholderSelector[0].toUpperCase() + placeholderSelector.substring(1)

    const validationRules = {
        user_name: { required: 'El nombre es obligatorio' },
        user_email: {
            required: 'El correo electrónico es obligatorio',
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Correo electrónico inválido' }
        },
        user_phone: {
            required: 'El teléfono es obligatorio',
            pattern: { value: /^[0-9]+$/, message: 'El teléfono solo debe contener números' }
        }
    }

    const inputValue = watch(name)

    return (
        <div className='flex flex-col gap-1'>
            <label
                className='font-medium'
                htmlFor={name}
            >
                {labelSelector}
            </label>
            <input
                className={`border hover:border-textMain focus:border-textMain rounded-xl px-4 py-2 outline-none ease-out duration-300
                    ${error ? 'border-red-600' : inputValue ? 'border-textMain' : 'border-textMain/50'}
                    `}
                {...register(name, validationRules[name])}
                type={typeSelector}
                placeholder={`Ingrese su ${placeholderSelector}`}
            />
            {error && <p className="text-red-600 text-sm">{error.message}</p>}
        </div>
    )
}
