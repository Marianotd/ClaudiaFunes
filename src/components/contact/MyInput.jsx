import React from 'react'

export default function MyInput({ name, register, watch, error }) {
    const inputConfig = {
        user_phone: { type: 'tel', placeholder: 'teléfono', label: 'Teléfono' },
        user_email: { type: 'email', placeholder: 'email', label: 'Correo electrónico' },
        user_name: { type: 'text', placeholder: 'nombre completo', label: 'Nombre completo' }
    }

    const { type, placeholder, label } = inputConfig[name] || inputConfig['user_name'];

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
            <label className='font-medium' htmlFor={name}>
                {label}
            </label>

            <input
                className={`border hover:border-textMain focus:border-textMain rounded-xl px-4 py-2 outline-none ease-out duration-300
                    ${error ? 'border-red-600' : inputValue ? 'border-textMain' : 'border-textMain/50'}
                    `}
                {...register(name, validationRules[name])}
                type={type}
                placeholder={`Ingrese su ${placeholder}`}
            />
            {error && <p className="text-red-600 text-sm">{error.message}</p>}
        </div>
    )
}
