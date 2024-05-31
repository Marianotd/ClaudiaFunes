import React from 'react'
import HeroCarousel from './HeroCarousel'
import HeroBanner from './HeroBanner'

export default function HeroSection() {
    return (
        <section className="heroSection">
            <HeroCarousel />

            <HeroBanner />
        </section>
    )
}
