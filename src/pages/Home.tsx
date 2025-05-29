// src/pages/Home.tsx
import Destinations from '../components/sections/Destinations' // No .tsx extension
import Hero from '../components/sections/Hero'
import FlightSearch from '../components/sections/FlightSearch'
import Destinations from '../components/sections/Destinations'
import WhyEmirates from '../components/sections/WhyEmirates'
import SpecialOffers from '../components/sections/SpecialOffers'
import Testimonials from '../components/sections/Testimonials'
import AppPromo from '../components/sections/AppPromo'
import Newsletter from '../components/sections/Newsletter'

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