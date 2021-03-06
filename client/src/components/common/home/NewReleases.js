import React from 'react'

import { getSingleTag } from '../../lib/api'
import ProductPanel from '../../utils/ProductPanel'


function NewReleasesSection() {
  const [newReleases, setNewReleases] = React.useState(null)

  React.useEffect(() => {
    const getReleases = async () => {
      try {
        const { data } = await getSingleTag(11)
        const taggedReleases = data.tags
        setNewReleases(taggedReleases)
      } catch (err) {
        console.log(err)
      }
    }
    getReleases()
  }, [])

  return (
    <div className="product-section-wrapper">
      <div className="product-section-title new-releases-title">
        New Releases
      </div>
      {newReleases ?
        <ProductPanel releases={newReleases} />
        :
        <p>Loading</p>
      }
    </div>
  )
}

export default NewReleasesSection