import React from 'react'
import Banner from './Banner'
import Categories from './Categories'
import HeroSection from './HeroSection'
import { TrendingProduct } from '../Shop/TrendingProduct'

function Home() {
  return (
    <>
    <Banner/>
    <Categories/>
    <HeroSection/>
    <TrendingProduct/>
    </>
  )
}

export default Home
