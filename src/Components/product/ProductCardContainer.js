import React from 'react'
import ProductCard from './ProductCard';
import { Row, Container } from 'react-bootstrap';
import SubTitle from '../Home/utility/SubTitle';

const ProductCardContainer = ({title,btntitle,PathText}) => {
  return (
    <Container>
    <SubTitle title={title} btntitle={btntitle} PathText={PathText} />
    <Row className='my-2 d-flex  justify-content-between' >
   <ProductCard/>   
   <ProductCard/>
   <ProductCard/>
   <ProductCard/>


    </Row>
  </Container>
  )
}

export default ProductCardContainer
