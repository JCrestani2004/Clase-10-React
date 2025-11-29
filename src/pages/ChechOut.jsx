import React from 'react'
import Encabezado from '../component/Encabezado'
import HomeServices from '../component/HomeServices'
import CheckOutPage from './checkout/CheckOutPage'

const ChechOut = () => {
  return (
    <>
    <Encabezado titulo={"CheckOut"} />
    <HomeServices />
    <CheckOutPage />
    </>
  )
}

export default ChechOut