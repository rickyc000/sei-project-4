import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { TrackContext } from '../../TrackContext'

function FavouriteCard({ release }) {

  const { setValue } = useContext(TrackContext)

  //* Passes track information to the player:
  function handlePlay(track, artistName) {
    const trackToPlay = [{
      src: track.preview_URL,
      title: artistName,
      artist: track.title
    }]
    setValue(trackToPlay)
  }

  return (
    <div className="fav-card-inner-wrapper">


      <div className="fav-card-image-wrapper">
        <Link to={`/release/${release.id}/`}>
          <img
            className="fav-card-image"
            src={release.artwork}
            alt={release.title}
          />
        </Link>
      </div>


      <div className="fav-card-content-wrapper">
        <div className="fav-card-info-section">
          <div className="fav-card-artist-name">
            {release.artist.name}
          </div>
          <div className="fav-card-release-title">
            {release.title}
          </div>
          <div className="fav-card-label">
            [{release.label.name}] / {release.releaseYear}
          </div>
        </div>
        <div className="fav-card-tracks-section">
          {release.tracks.map(track => (
            <div
              key={track.id}
              className="fav-track-wrapper"
              onClick={() => handlePlay(track, release.artist.name)}>
              <div
                className="play-button"
              >
                Play
              </div>
              <div> {track.title}  </div>
            </div>
          ))}
        </div>
      </div>





    </div>
  )


}

export default FavouriteCard