import { Suspense } from 'react'
import HeroSection from '../components/sections/Hero'
import FlightSearch from '../components/sections/FlightSearch.tsx'
import Destinations from '../components/sections/Destinations.tsx'
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
        <HeroSection />
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