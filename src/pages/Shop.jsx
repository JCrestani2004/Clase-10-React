import React from 'react'
import ShopStart from './shop/ShopStart'
import Encabezado from '../component/Encabezado'
import HomeServices from '../component/HomeServices'
import HomeProductsOffer from '../component/HomeProductsOffer'
import HomeBanner from '../component/HomeBanner'

const Shop = () => {
  return (
    <>
    <Encabezado titulo={"Shop"} />
    <HomeServices />
    <HomeProductsOffer />
    <ShopStart />
    <HomeBanner />
    </>
  )
}

export default Shop