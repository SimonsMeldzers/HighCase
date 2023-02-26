import React from 'react'
import AnnouncementLine from '../../components/AnnouncementLine/AnnouncementLine';
import Navbar from '../../components/Navbar/Navbar';
import ProductsBody from '../../components/ProductsBody/ProductsBody';
import ProductsFilter from '../../components/ProductsFilter/ProductsFilter';

const Products = () => {
  return (
    <>
      <Navbar/>
      <AnnouncementLine text='FREE SHIPPING ON ORDERS OVER 25€! '/>
      <ProductsFilter/>
      <ProductsBody/>
    </>
  )
}

export default Products;