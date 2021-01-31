import React from 'react'
// import Footer from '../common/Footer'

import AudioPlayer from 'react-modular-audio-player'

function Player(track, artistName) {
  console.log('rendering Player')


  //* Sets default info needed for Audio player
  let trackToPlay = [{
    src: '',
    title: '',
    artist: ''
  }]

  

  if (track) {
    trackToPlay = [{
      src: track.preview_URL,
      title: track.title,
      artist: artistName
    }]
    // setActivate(!activate)
    // console.log(trackToPlay)
  } else {
    console.log('nothing yet')
  }


  console.log(trackToPlay[0].src)


  return (
    <div>

      {trackToPlay[0].src ?
        <AudioPlayer
          audioFiles={trackToPlay}
        />
        // <p>{trackToPlay[0].title}</p>
        :
        <p>No track</p>
      }

    </div>
  )
}

export default Player


