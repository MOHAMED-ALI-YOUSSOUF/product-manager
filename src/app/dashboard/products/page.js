import ProductHeader from "@/components/dashboard/products/product-header";
import ProductList from "@/components/dashboard/products/product-list";
import { config } from "@/utils/config";
import Link from "next/link";
import React from "react";

const DashboardProductsPage = async () => {
  const res = await fetch(`${config.apiURL}/products`);
  const product = await res.json();

  return (
    <div>
         <ProductHeader/>
      <ProductList product={product} />
    </div>
  );
};

export default DashboardProductsPage;
