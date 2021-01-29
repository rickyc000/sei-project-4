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
          <div>
            <img
              src={showRelease.artwork}
              alt='show release'
              width='300px'
            />
            <div>
              {showRelease.title}
            </div>
            <div>
              {showRelease.label.name}
            </div>
            <div>
              {showRelease.description}
            </div>

            {showRelease.tracks.map(track => (
              <div key={track.id}>
                <p> {track.discNumber} </p>
                <p> {track.title}  </p>
              </div>
            ))}


          </div>
          :
          <p>Loading</p>
        }

      </div>
    </main>
  )
}

export default ReleaseShow