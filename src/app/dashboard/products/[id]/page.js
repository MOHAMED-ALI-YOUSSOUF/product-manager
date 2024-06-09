import EditProductForm from '@/components/dashboard/products/edit-product-form'
import React from 'react'

const DashboardProductDetailsPage = ({params}) => {
  
  return (
    <div>
      DashboardProductDetailsPage: {params.id}
      <EditProductForm/>
    </div>
  )
}

export default DashboardProductDetailsPage
