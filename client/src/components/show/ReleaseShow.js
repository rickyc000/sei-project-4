import React, { useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getSingleRelease, addToFavourites, removeFromFavourites } from '../lib/api'
import { isAuthenticated, getUserId } from '../lib/auth'
import { TrackContext } from '../../TrackContext'
import { FavouriteContext } from '../../FavouriteContext'

function ReleaseShow() {

  const { id } = useParams()
  const [showRelease, setShowRelease] = React.useState(null)
  const [isFavourite, setIsFavourite] = React.useState(false)
  const { setTrackToPlay } = useContext(TrackContext)
  const { favourites, setFavourites } = useContext(FavouriteContext)
  const isLoggedIn = isAuthenticated()

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
        console.log(favourites)
        setFavourites(+1)
      } catch (err) {
        console.log(err)
      }
    } else {
      try {
        await addToFavourites(id)
        setIsFavourite(!isFavourite)
        setFavourites(-1)
      } catch (err) {
        console.log(err)
      }
    }
  }

  //* Passes track information to the player (updated player)
  function handlePlay(track, showRelease) {
    const trackToPlay = [{
      src: track.preview_URL,
      title: track.title,
      artist: showRelease.artist.name,
      artwork: showRelease.artwork,
      footerPosition: '0'
    }]
    setTrackToPlay(trackToPlay)
  }


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

                {!isLoggedIn ?
                  <div className="handle-favourite">
                    <Link to='/login/'>
                      <div className="add-to-collection-blocked">
                        Add to collection
                      </div>
                    </Link>
                  </div>
                  :
                  <div
                    onClick={handleFavourite}
                    className="handle-favourite"
                  >
                    {isFavourite ?
                      <div className="remove-from-collection">
                        Remove
                      </div>
                      :
                      <div className="add-to-collection">
                        Add to collection
                      </div>
                    }
                  </div>
                }









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
                  className="track-wrapper"
                  onClick={() => handlePlay(track, showRelease)}>
                  <div
                    className="play-button"
                  >
                    Play
                    {/* <svg src={Play} alt="play" className="release-play-icon" visibility="visible"/> */}
                  </div>
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