import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Table } from "react-bootstrap";
import {FaEdit} from "react-icons/fa"
import BtnDeleteProduct from "./btn-delete-product";

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
        {product.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.category}</td>
            <td>{item.price}</td>
            <td>
              <Image
                src={item.image}
                width={50}
                height={50}
                alt={item.title}
              />
            </td>
            <td>
            <Link href={`/dashboard/products/${item.id}`}>
                <FaEdit />
              </Link>
              <span className="ms-3">
              <BtnDeleteProduct /></span>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default itemList;
