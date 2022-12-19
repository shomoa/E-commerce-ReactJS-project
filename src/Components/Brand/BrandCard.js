import React from 'react'
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const BrandCard = ({img}) => {
  return (
    <Col
        xs="6"
        sm="6"
        md="4"
        lg="2" //12/2=6 لما الشاشة كبيرة يعرض 6 ماركات 
        className="my-2 d-flex justify-content-center">
        <Card
          className="my-1"
          style={{
            width: "100%",
            height: "151px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#FFFFFF",
          }}>
          <Card.Img style={{ width: "100%", height: "151px" }} src={img} />
        </Card>
      </Col>

    
  )
}

export default BrandCard
