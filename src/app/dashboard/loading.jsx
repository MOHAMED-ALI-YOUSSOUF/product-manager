import Loader from '@/components/common/loader'
import React from 'react'

const LoadingPage = () => {
  return (
    <div className='d-flex justify-content-center align-items-center h-100'>
      <Loader size="lg"/>
    </div>
  )
}

export default LoadingPage
