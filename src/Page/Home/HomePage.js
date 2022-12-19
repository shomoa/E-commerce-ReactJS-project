import React from 'react'
import NavBarLogin from '../../Components/Home/utility/NavBarLogin'
import Slider from '../../Components/Home/Slider'
import HomeCategory from '../../Components/Home/HomeCategory'
import ProductCardContainer from './../../Components/product/ProductCardContainer';
import DiscountSection from './../../Components/Home/DiscountSection';
import BrandFeatured from './../../Components/Brand/BrandFeatured';
import Footer from '../../Components/Home/utility/Footer';

const HomePage = () => {
  return (
    <div className='font' style={{minHeigth:"670px" }}>
      <Slider/>
      <HomeCategory/>
      <ProductCardContainer title="الاكثر مبيعا" btntitle="المزيد" PathText="/product"/>

      <DiscountSection/>
      <ProductCardContainer  title="أحدث الأزياء" btntitle="المزيد" PathText="/product"/>
      <BrandFeatured title="أشهر الماركات" btntitle="المزيد" />
    </div>
  )
}

export default HomePage
