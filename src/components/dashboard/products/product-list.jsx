import React from "react";
import { Table } from "react-bootstrap";
import ProductRow from "./productRow";

const itemList = ({ product }) => {
  if (!product) {
    return <div>No item available</div>;
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Category</th>
          <th>Price</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {product.map((item, index) => (
          <ProductRow {...item} seq={index + 1} />
        ))}
      </tbody>
    </Table>
  );
};

export default itemList;
