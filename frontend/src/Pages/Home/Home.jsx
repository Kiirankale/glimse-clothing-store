import React from 'react'
import Banner from './Banner'
import Categories from './Categories'
import HeroSection from './HeroSection'
import { TrendingProduct } from '../Shop/TrendingProduct'
import { DealsSection } from './DealsSection'
import { PromoBanner } from './PromoBanner'

function Home() {
  return (
    <>
    <Banner/>
    <Categories/>
    <HeroSection/>
    <TrendingProduct/>
    <DealsSection/>
    <PromoBanner/>
    </>
  )
}

export default Home
