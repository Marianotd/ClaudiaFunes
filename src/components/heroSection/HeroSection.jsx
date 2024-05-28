import React from 'react'
import Carousel from './Carousel'

export default function HeroSection() {
    return (
        <section className="heroSection">
            <Carousel/>
            <div className='heroSection__text'>
                <h4>Por Claudia Funes</h4>
                <p>
                    Soy Claudia Funes, tarotista, tatuadora y emprendedora. Mi vida fusiona intuición y creatividad, revelando caminos ocultos y plasmando historias en la piel.
                </p>
                <p>
                    Aquí encontrarás inspiración, consejos y reflexiones sobre mi viaje espiritual y artístico.
                </p>
                <p>
                    Únete a mí para descubrir la magia en cada día y transformar tu vida con arte y sabiduría. ¡Bienvenidos a mi mundo!
                </p>
            </div>
        </section>
    )
}
