import React, { useContext } from 'react'
import AudioPlayer from 'react-modular-audio-player'
import { TrackContext } from '../../TrackContext'

function Player() {
  console.log('rendering Player')
  const { value } = useContext(TrackContext)
  const settings = true
  const fontSize = '40x'

  return (
    <div>
      {/* <img src='../../../assets/icons8-play-96.png' alt='play' /> */}
      {value ?
        <AudioPlayer
          audioFiles={value}
          hideForward={settings}
          hideRewind={settings}
          hideLoop={settings}
          fontSize={fontSize}
          playerWidth="600px"
          // playIcon='../../../../client/assets/icons8-play-96.png'
          // playHoverIcon='../../../../client/assets/icons8-play-96.png'
        />
        :
        <p>No track selected</p>}
    </div>
  )
}

export default Player
//* This is exported into the footer component
