import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { TrackContext } from '../../TrackContext'
// import Play from '../../assets/icons8-play-96.png'

function FavouriteCard({ release }) {

  const { setTrackToPlay } = useContext(TrackContext)

  //* Passes track information to the player
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
              onClick={() => handlePlay(track, release)}>
              <div
                className="play-button"
              >
                <i className="fas fa-play fav-play" id="fav-play"></i>
              </div>
              <div> {track.title}  </div>
            </div>
          ))}
          <div className="fav-buy-link">
            <a href={release.buyLink} target="_blank" rel="noreferrer">
              <div className="buy-link-button">
                <div>Buy</div>
                <i className="fas fa-external-link-alt"></i>
              </div>
            </a>
          </div>
        </div>
      </div>





    </div>
  )


}

export default FavouriteCard