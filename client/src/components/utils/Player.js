import React, { useContext } from 'react'
// import AudioPlayer from 'react-modular-audio-player'
import { TrackContext } from '../../TrackContext'
import ReactAudioPlayer from 'react-audio-player'
import Close from '../../assets/icons8-close-window-96.png'

function Player() {
  console.log('rendering Player')
  const { trackToPlay, setTrackToPlay } = useContext(TrackContext)


  //* Passes track information to the player (updated player)
  function handleClosePlayer() {
    const trackToPlay = [{
      src: '',
      title: '',
      artist: '',
      artwork: '',
      footerPosition: '-70px'
    }]
    setTrackToPlay(trackToPlay)
  }

  return (
    <div>

      {trackToPlay ?

        <div className="player-wrapper">
          <div className="player-image-wrapper">
            <img
              src={trackToPlay[0].artwork}
              alt={trackToPlay[0].title}
              width='60px' />
          </div>
          <div className="player-info-wrapper">
            <div className="player-title">{trackToPlay[0].title}</div>
            <div className="player-artist">{trackToPlay[0].artist}</div>
          </div>
          <ReactAudioPlayer
            src={trackToPlay[0].src}
            autoPlay
            controls
            controlsList="nodownload"
          />
          <div
            className="player-close-button"
            onClick={() => handleClosePlayer()}>
            <img src={Close} alt="close-player" width="26px" />
          </div>
        </div>
        :
        <p>No track selected</p>}
    </div>
  )
}

export default Player
//* This is exported into the footer component
