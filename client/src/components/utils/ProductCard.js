import React from 'react'

function ProductCard({ release }) {

  console.log(release)



  return (
    <div className="product-card-inner-wrapper">
      <img
        className="product-card-image"
        src={release.artwork}
        alt={release.title}
      />
      <div className="product-card-release-title">
        {release.title}
      </div>
      <div>
        {release.artist.name}
      </div>
      <div>
        [{release.label.name}]
      </div>
    </div>

  )


}

export default ProductCard