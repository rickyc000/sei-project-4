import React from 'react'
// import ProductCard from '../../utils/ProductCard'

import { getSingleTag } from '../../lib/api'
import ProductCard from '../../utils/ProductCard'



function FeaturedSection() {


  const [newReleases, setNewReleases] = React.useState(null)

  React.useEffect(() => {
    const getReleases = async () => {
      try {
        const { data } = await getSingleTag(11)
        const taggedReleases = data.tags
        setNewReleases(taggedReleases)
      } catch (err) {
        console.log(err)
        // setHasError(true)
      }
    }
    getReleases()
  }, [])

  console.log(newReleases)

  return (
    <div className="new-releases-wrapper">

      <div className="new-releases-title">
        New Releases
      </div>


      {newReleases ?
        <div className="product-panel">
          {
            newReleases.map(release => (
              <div key={release.id} className="product-card">
                <ProductCard release={release} />
              </div>
            ))
          }
        </div>

        :
        <p>Loading</p>
      }







    </div>
  )

}

export default FeaturedSection