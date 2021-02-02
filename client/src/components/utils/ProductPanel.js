import React from 'react'
import ProductCard from '../utils/ProductCard'

function ProductPanel({ releases }) {
  return (
    <div className="product-panel">
      {
        releases.map(release => (
          <div key={release.id} className="product-card">
            <ProductCard release={release} />
          </div>
        ))
      }
    </div>
  )
}

export default ProductPanel