import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaEdit } from "react-icons/fa";
import BtnDeleteProduct from "./btn-delete-product";

const ProductRow = ({ id, title, price, category,image, seq}) => {
  return (
    <>
      <tr key={id}>
        <td>{seq}</td>
        <td>{title}</td>
        <td>{category}</td>
        <td>{price}</td>
        <td>
          <Image src={image} width={50} height={50} alt={title} />
        </td>
        <td >
          {" "}
          <div className="d-flex">

         
          <Link href={`/dashboard/products/${id}`}>
            <FaEdit />
          </Link>
          <BtnDeleteProduct id={id} /> </div>
        </td>
      </tr>
    </>
  );
};

export default ProductRow;
