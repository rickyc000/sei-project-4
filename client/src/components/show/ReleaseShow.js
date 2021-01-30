import React from 'react'
import { useParams } from 'react-router-dom'
import { getSingleRelease, addToFavourites, removeFromFavourites } from '../lib/api'
import { getUserId } from '../lib/auth'


function ReleaseShow() {

  const { id } = useParams()

  const [showRelease, setShowRelease] = React.useState(null)
  const [isFavourite, setIsFavourite] = React.useState(false)

  React.useEffect(() => {
    const getReleases = async () => {
      try {
        const { data } = await getSingleRelease(id)
        setShowRelease(data)
        if (data.favouritedBy.includes(getUserId())) {
          setIsFavourite(true)
        }
      } catch (err) {
        console.log(err)
      }
    }
    getReleases()
  }, [])

  const handleFavourite = async event => {
    event.preventDefault()

    if (isFavourite) {
      try {
        await removeFromFavourites(id)
        setIsFavourite(!isFavourite)
      } catch (err) {
        console.log(err)
      }
    } else {
      try {
        await addToFavourites(id)
        setIsFavourite(!isFavourite)
      } catch (err) {
        console.log(err)
      }
    }


  }


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

            <div onClick={handleFavourite}>

              {isFavourite ?
                <div>FAVOURITED </div>
                :
                <div
                >
                  NOT FAVOURITED</div>
              }

            </div>

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