import React from 'react'
import SectionListContainer from './SectionListContainer'

export default function SectionContainer() {
    const data = [
        {
            id: "asdasd",
            cat: "Ilustraciones",
            items: [
                {
                    name: "Prueba1",
                    img: "/assets/productos/ArcanoElCarro.jpg",
                    description: "Este es un texto de prueba"
                },
                {
                    name: "Prueba2",
                    img: "/assets/productos/ArquetipoAire.jpg",
                    description: "Este es un texto de prueba"
                },
                {
                    name: "Prueba3",
                    img: "/assets/productos/ArquetipoFuego.jpg",
                    description: "Este es un texto de prueba"
                },
            ]
        },
        {
            id: "556756",
            cat: "Tarot",
            items: [
                {
                    name: "Prueba1",
                    img: "/assets/productos/ArcanoElCarro.jpg",
                    description: "Este es un texto de prueba"
                },
                {
                    name: "Prueba2",
                    img: "/assets/productos/ArquetipoAire.jpg",
                    description: "Este es un texto de prueba"
                },
                {
                    name: "Prueba3",
                    img: "/assets/productos/ArquetipoFuego.jpg",
                    description: "Este es un texto de prueba"
                },
            ]
        },
        {
            id: "123123",
            cat: "Tatuajes",
            items: [
                {
                    name: "Prueba1",
                    img: "/assets/productos/ArcanoElCarro.jpg",
                    description: "Este es un texto de prueba"
                },
                {
                    name: "Prueba2",
                    img: "/assets/productos/ArquetipoAire.jpg",
                    description: "Este es un texto de prueba"
                },
                {
                    name: "Prueba3",
                    img: "/assets/productos/ArquetipoFuego.jpg",
                    description: "Este es un texto de prueba"
                },
            ]
        }
    ]

    return (
        data.map(category => (
            <article key={category.id} className='categoryContainer' id={category.id}>
                <h4 className='categoryContainer__title'>{category.cat}</h4>
                <SectionListContainer items={category.items} className="sectionListContainer" />
            </article>
        ))
    )
}
