import React from 'react'
import { Container } from 'react-bootstrap'
import CategoryContainer from '../../Components/Category/CategoryContainer'
import Pagination from '../../Components/Home/utility/Pagination'

const AllCategoryPages = () => {
  return (
  <div style={{minHeight:"670px"}}>    
    <CategoryContainer/>
    <Pagination/>
    </div>
  )
}

export default AllCategoryPages
