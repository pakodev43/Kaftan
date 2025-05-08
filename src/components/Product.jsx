import React from 'react'
import { Link } from 'react-router-dom'

function Product({ ProductImage, Name, Price, link }) {
  return (
    <div>
        <Link to={ link }>
          <div><img src={ ProductImage } alt="Image of the product" className='aspect-1/1 object-cover rounded-t-xl' /></div>
          <div className='m-3'>
              <p className="mt-1.5 md:mt-0 text-xs md:text-sm">{ Name }</p>
              <div className="flex gap-5 text-xs md:text-sm"><p>Rs. { Price }</p></div>
          </div>
        </Link>
      </div>
  )
}

export default Product