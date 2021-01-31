import React from 'react'
import { Link } from 'react-router-dom'

function ProductCard({ release }) {

  console.log(release)



  return (
    <div className="product-card-inner-wrapper">
      <Link to={`/release/${release.id}`}>
        <img
          className="product-card-image"
          src={release.artwork}
          alt={release.title}
        />
      </Link>
      <div>
        {release.artist.name}
      </div>
      <div className="product-card-release-title">
        {release.title}
      </div>
      <div>
        [{release.label.name}]
      </div>
    </div>

  )


}

export default ProductCard