import React from 'react'
import MyInput from '../contact/MyInput'

export default function InputList({ data, register, watch, errors }) {
    return (
        data.map((inputName, index) => (
            <MyInput
                key={`${index}-${inputName}`}
                name={inputName}
                register={register}
                watch={watch}
                error={errors[inputName]}
            />
        ))
    )
}
