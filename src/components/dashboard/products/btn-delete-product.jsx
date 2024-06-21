"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "react-bootstrap";
import { FaRegTrashAlt } from "react-icons/fa";

const BtnDeleteProduct = ({ productId }) => {
  const router = useRouter();

  const handleDelete = async () => {
    const resp = confirm("Are you sure to delete")

    if(!resp) return
  
  };

  return (
    <Button variant="link" onClick={handleDelete}>
     <FaRegTrashAlt/>
    </Button>
  );
};

export default BtnDeleteProduct;
