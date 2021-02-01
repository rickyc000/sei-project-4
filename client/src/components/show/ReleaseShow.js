import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleRelease, addToFavourites, removeFromFavourites } from '../lib/api'
import { getUserId } from '../lib/auth'
// import test from '../common/Footer' 
// import Player from '../utils/Player'
import { TrackContext } from '../../TrackContext'

function ReleaseShow() {

  const { id } = useParams()
  // test('hi')
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

  const { value, setValue } = useContext(TrackContext)


  // function handlePlay(track, artistName) {
  //   Player(track, artistName)
  // }

  function handlePlay(track, artistName) {

    const trackToPlay = [{
      src: track.preview_URL,
      title: track.title,
      artist: artistName
    }]


    setValue(trackToPlay)
  }

  console.log(value)
  

  return (
    <main>
      <div className="showpage-wrapper">


        {showRelease ?
          <div className="release-content-wrapper" >
            <div className="showpage-top-section">
              <div className="showpage-left-section">
                <div className="showpage-artwork-wrapper">
                  <img className="showpage-artwork"
                    src={showRelease.artwork}
                    alt='show release'
                  />
                </div>

                <div onClick={handleFavourite}>
                  {isFavourite ?
                    <div>Added to collection </div>
                    :
                    <div>Add to collection</div>
                  }
                </div>
              </div>
              <div className="showpage-right-section">
                <div className="showpage-artist-name">
                  {showRelease.artist.name}
                </div>
                <div className="showpage-release-title">
                  {showRelease.title}
                </div>
                <div className="showpage-release-label">
                  [{showRelease.label.name}] / {showRelease.releaseYear}
                </div>
                <div className="showpage-description">
                  {showRelease.description}
                </div>
              </div>
            </div>
            <div className="showpage-tracks-section">
              {showRelease.tracks.map(track => (
                <div
                  key={track.id}
                  className="track-wrapper">
                  <div
                    className="play-button"
                    onClick={() => handlePlay(track, showRelease.artist.name)}>
                    Play
                  </div>
                  {/* <div> {track.discNumber} </div> */}
                  <div> {track.title}  </div>
                </div>
              ))}
            </div>
          </div>
          :
          <p>Loading</p>
        }

      </div >
    </main >
  )
}

export default ReleaseShow