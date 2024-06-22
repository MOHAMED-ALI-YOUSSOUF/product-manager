"use client";
import CancelButton from "@/components/common/form-controls/cancel-button";
import SubmitButton from "@/components/common/form-controls/submit-button";
import React from "react";
import { Form } from "react-bootstrap";

const EditProductForm = ({ product }) => {
  return (
    <Form>
      <input type="hidden" name="id" defaultValue={id}/>
      <Form.Group className="mb-3">
        <Form.Label>Title</Form.Label>
        <Form.Control name="title" type="text" defaultValue={product.title} />
        <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          name="description"
          as="textarea"
          defaultValue={product.description}
          rows={3}
        />
        <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Price</Form.Label>
        <Form.Control name="price" type="number" defaultValue={product.price} />
        <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Category</Form.Label>
        <Form.Select name="category" defaultValue={product.category}>
          <option value={product.category}>{product.category}</option>
          <option value="Home">Home</option>
          <option value="Computers">Computers</option>
          <option value="Clothing">Clothing</option>
          <option value="Kids">Kids</option>
          <option value="Grocery">Grocery</option>
        </Form.Select>
        <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Image</Form.Label>
        <Form.Control name="image" type="file" />
        <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
      </Form.Group>
      <SubmitButton title="Update" />
      <CancelButton />
    </Form>
  );
};

export default EditProductForm;
