"use client";
import Image from "next/image";
import React from "react";
import { Badge, Card, CardFooter } from "react-bootstrap";
import "./product-item.scss";
import { useRouter } from "next/navigation";
const ProductItem = ({ id, title, image, price, description }) => {
  
    const router = useRouter()
    const handleClick = () => {
        router.push(`/products/${id}`)
  };

  return (
    <Card className="product-card" onClick={handleClick}>
      <div className="image ">
        <Image
          alt={title}
          src={image}
          fill
          className="card-img-top"
          style={{ objectFit: "cover" }}
        />
      </div>

      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        {/* <Badge variant="warning">{price}</Badge> */}
      </Card.Body>
      <Card.Footer>
        <Badge variant="warning">{price}</Badge>
      </Card.Footer>
    </Card>
  );
};

export default ProductItem;
