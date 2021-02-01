import React, { useContext } from 'react'
// import AudioPlayer from 'react-modular-audio-player'
import { TrackContext } from '../../TrackContext'
import ReactAudioPlayer from 'react-audio-player'

function Player() {
  console.log('rendering Player')
  const { value } = useContext(TrackContext)
  // const settings = true
  // const fontSize = '40x'

  return (
    <div>
      {/* <img src='../../../assets/icons8-play-96.png' alt='play' /> */}
      {value ?
      // <AudioPlayer
      //   audioFiles={value}
      //   hideForward={settings}
      //   hideRewind={settings}
      //   hideLoop={settings}
      //   fontSize={fontSize}
      //   playerWidth="600px"
      //   // playIcon='../../../../client/assets/icons8-play-96.png'
      //   // playHoverIcon='../../../../client/assets/icons8-play-96.png'
      // />

        <div className="player-wrapper">
          <div className="player-image-wrapper">
            <img
              src={value[0].artwork}
              alt={value[0].title}
              width='60px' />
          </div>
          <div className="player-info-wrapper">
            <div className="player-title">{value[0].title}</div>
            <div className="player-artist">{value[0].artist}</div>
          </div>

          <ReactAudioPlayer
            src={value[0].src}
            autoPlay
            controls
            controlsList="nodownload"
          />
        </div>
        :
        <p>No track selected</p>}
    </div>
  )
}

export default Player
//* This is exported into the footer component
