import React from 'react'
import { useParams } from 'react-router-dom'
import { getSingleRelease } from '../lib/api'


function ReleaseShow() {

  const { id } = useParams()

  const [showRelease, setShowRelease] = React.useState(null)
  const [hasError, setHasError] = React.useState(false)

  React.useEffect(() => {
    const getReleases = async () => {
      try {
        const { data } = await getSingleRelease(id)
        setShowRelease(data)
      } catch (err) {
        console.log(err)
        setHasError(true)
      }
    }
    getReleases()
  }, [])


  console.log('id is ' + id)

  console.log(showRelease)
  console.log(hasError)

  return (
    <main>
      Release show

      <div>
        {showRelease ?
          <img
            src={showRelease.artwork}
            alt='show release'
            width='300px'
          />
          :
          <p>Loading</p>
        }

      </div>
    </main>
  )
}

export default ReleaseShow