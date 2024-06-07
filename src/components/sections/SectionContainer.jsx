import React, { useState, useEffect } from 'react'
import SectionListContainer from './SectionListContainer'
import { getItems } from '../../services/firestore'
import ButtonSection from '../common/ButtonSection'

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
                data.map(category => (
                    <article key={category.id} className='categoryContainer' id={category.id}>
                        <h4 className='categoryContainer__title'>{category.cat}</h4>
                        <SectionListContainer items={category.items} />
                        <div className='categoryContainer__button'>
                            <ButtonSection text={"VER TODOS"} url={"/"} />
                        </div>

                    </article>
                ))
            }
        </section>
    )
}
