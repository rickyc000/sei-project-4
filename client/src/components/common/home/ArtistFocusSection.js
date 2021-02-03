import React from 'react'

import { getSingleTag } from '../../lib/api'
import ProductPanel from '../../utils/ProductPanel'


function ArtistFocusSection() {
  const [labelFeatureReleases, setLabelFeatureReleases] = React.useState(null)

  React.useEffect(() => {
    const getReleases = async () => {
      try {
        const { data } = await getSingleTag(13)
        const taggedReleases = data.tags
        setLabelFeatureReleases(taggedReleases)
      } catch (err) {
        console.log(err)
      }
    }
    getReleases()
  }, [])

  return (
    <div className="product-section-wrapper">
      <div className="product-section-title label-feature-title">
        Artist Focus: Sophie
      </div>
      {labelFeatureReleases ?
        <ProductPanel releases={labelFeatureReleases} />
        :
        <p>Loading</p>
      }
    </div>
  )
}

export default ArtistFocusSection