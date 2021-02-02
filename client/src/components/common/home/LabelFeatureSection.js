import React from 'react'

import { getSingleTag } from '../../lib/api'
import ProductPanel from '../../utils/ProductPanel'


function LabelFeatureSection() {
  const [labelFeatureReleases, setLabelFeatureReleases] = React.useState(null)

  React.useEffect(() => {
    const getReleases = async () => {
      try {
        const { data } = await getSingleTag(12)
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
        Label Of The Month: xpq?
      </div>
      {labelFeatureReleases ?
        <ProductPanel releases={labelFeatureReleases} />
        :
        <p>Loading</p>
      }
    </div>
  )
}

export default LabelFeatureSection