import React from 'react'
import BrandContainer from '../../Components/Brand/BrandContainer'
import CategoryContainer from '../../Components/Category/CategoryContainer'
import Pagination from '../../Components/Home/utility/Pagination'

const AllBrandPages = () => {
  return (
    
    <div style={{minHeight:"670px"}}>    
    <BrandContainer />
    <Pagination/>
    </div>
    
  )
}

export default AllBrandPages
