import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Pagination from '../../Components/Home/utility/Pagination';
import SearchCountResult from '../../Components/Home/utility/SearchCountResults';
import SideFilter from '../../Components/Home/utility/SideFilter';
import CategoryHeader from './../../Components/Category/CategoryHeader';
import ProductCardContainer from './../../Components/product/ProductCardContainer';

const ShopProductsPage = () => {
  return (
    <div style={{ minHeight: '680px' }}>"
      <CategoryHeader />
      <Container>
        <SearchCountResult title="400 نتيجة بحث" />
        <Row className='d-flex flex-row ' >
          <Col sm='2' xs='2' md='1' className='d-flex' >
            <SideFilter />
          </Col>

          <Col sm='10' xs='10' md='11'  >
          <ProductCardContainer title="" btntitle="" />

          </Col>
        </Row>
        <Pagination/>
      </Container>
    </div>

  )
}

export default ShopProductsPage
