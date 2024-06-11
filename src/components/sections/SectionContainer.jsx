import React, { useState, useEffect } from 'react'
import SectionListContainer from './SectionListContainer'
import { getItems } from '../../services/firestore'
import ButtonSection from './ButtonSection'

export default function SectionContainer() {
    const [data, setData] = useState([])

    useEffect(() => {
        getData()
    }, [])

    async function getData() {
        const newData = await getItems("sections")
        setData(newData)
    }


    return (
        <section className='categorySection'>
            {
                data.map(cat => (
                    <article key={cat.id} className='categoryContainer' id={cat.id}>
                        <h4 className='categoryContainer__title'>{cat.cat}</h4>

                        <SectionListContainer items={cat.items} />

                        <div className='categoryContainer__button'>
                            <ButtonSection text={"VER TODOS"} url={"/"} />
                        </div>
                    </article>
                ))
            }
        </section>
    )
}
