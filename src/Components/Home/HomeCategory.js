import React from 'react'
import { Container, Row } from 'react-bootstrap'
import CategoryCard from '../Category/CategoryCard'
import SubTitle from './utility/SubTitle'
import clothe from '../../../src/images/clothe.png'
import cat2 from "../../images/cat2.png";
import labtop from "../../images/labtop.png";
import sale from "../../images/sale.png";
import pic from "../../images/pic.png";
const HomeCategory = () => {
  return (
    <Container>
      <SubTitle title="التصنيفات" btntitle="المزيد" PathText="/allcategory" />
      <Row className='my-2 d-flex  justify-content-between' >
      <CategoryCard title="اجهزة منزلية" img={labtop}  background='#F4DBA4'  />
      <CategoryCard title="اجهزة منزلية" img={pic}  background='#F4DBA4'  />
      <CategoryCard title="اجهزة منزلية" img={clothe}  background='#0034FF'  />
      <CategoryCard title="اجهزة منزلية" img={labtop}  background='#F4DBA4'  />
      <CategoryCard title="اجهزة منزلية" img={pic}  background='#F4DBA4'  />
      <CategoryCard title="اجهزة منزلية" img={sale}  background='#F4DBA4'  />
      <CategoryCard title="اجهزة منزلية" img={cat2}  background='#F4DBA4'  />
      <CategoryCard title="اجهزة منزلية" img={clothe}  background='#F4DBA4'  />
      <CategoryCard title="اجهزة منزلية" img={labtop}  background='#F4DBA4'  />
      <CategoryCard title="اجهزة منزلية" img={pic}  background='#F4DBA4'  />
      <CategoryCard title="اجهزة منزلية" img={clothe}  background='#0034FF'  />
      <CategoryCard title="اجهزة منزلية" img={labtop}  background='#F4DBA4'  />
      </Row>
    </Container>
  )
}

export default HomeCategory
