import React from 'react'
import HomeCarousel from './home/HomeCarousel'
import HomeServices from '../component/HomeServices'
import HomeProductsOffer from '../component/HomeProductsOffer'
import HomeOur from '../component/HomeOur'
import HomeBanner from '../component/HomeBanner'
import BestsellerList from '../component/BestsellerList'

const Home = () => {
  return (
    <>
    <HomeCarousel />
    <HomeServices />
    <HomeProductsOffer />
    <HomeOur />
    <HomeBanner />
    <BestsellerList />
    </>
  )
}

export default Home