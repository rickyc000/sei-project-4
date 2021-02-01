import React from 'react'
import { Link } from 'react-router-dom'

function FavouriteCard({ release }) {

  console.log(release)


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
        <div>
          {release.artist.name}
        </div>
        <div className="fav-card-release-title">
          {release.title}
        </div>
        <div>
          [{release.label.name}]
        </div>
        <div className="fav-card-tracks-section">
          {release.tracks.map(track => (
            <div
              key={track.id}
              className="fav-track-wrapper">
              <div
                className="fav-play-button"
                // onClick={() => handlePlay(track, release.artist.name)}
              >Play</div>
              {/* <div> {track.discNumber} </div> */}
              <div> {track.title}  </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )


}

export default FavouriteCard