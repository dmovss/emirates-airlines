import { Suspense } from 'react'
import Hero from '../components/sections/Hero'
import FlightSearch from '../components/sections/FlightSearch'
import Destinations from '../components/sections/Destinations'
import WhyEmirates from '../components/sections/WhyEmirates'
import SpecialOffers from '../components/sections/SpecialOffers'
import Testimonials from '../components/sections/Testimonials'
import AppPromo from '../components/sections/AppPromo'
import Newsletter from '../components/sections/Newsletter'
import LoadingSpinner from '../components/ui/LoadingSpinner'

export default function Home() {
  return (
    <div className="home-page">
      <Suspense fallback={<LoadingSpinner />}>
        <Hero />
        <FlightSearch />
        <Destinations />
        <WhyEmirates />
        <SpecialOffers />
        <Testimonials />
        <AppPromo />
        <Newsletter />
      </Suspense>
    </div>
  )
}