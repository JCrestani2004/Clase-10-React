import React from 'react'
import Encabezado from '../component/Encabezado'
import SingleProducts from './single/SingleProducts'
import RelatedProducts from './single/RelatedProducts'

const SinglePage = () => {
  return (
    <>
    <Encabezado titulo={"Single Page"} />
    <SingleProducts />
    <RelatedProducts />
    </>
  )
}

export default SinglePage