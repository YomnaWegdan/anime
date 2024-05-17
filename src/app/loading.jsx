import React from 'react'

export default function loading() {
  return (
    <div>
      <div className=' position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-dark'>
      <i className=' fas fa-spin fa-spinner fa-6x text-light'></i>
      </div>
    </div>
  )
}
