import React, { useContext } from 'react'
import AudioPlayer from 'react-modular-audio-player'
import { TrackContext } from '../../TrackContext'

function Player(track, artistName) {
  console.log('rendering Player')


  const { value } = useContext(TrackContext)

  //* Sets default info needed for Audio player
  let trackToPlay = [{
    src: '',
    title: '',
    artist: ''
  }]

  function addDataToPlayer() {
    if (track.title) {
      trackToPlay = [{
        src: track.preview_URL,
        title: track.title,
        artist: artistName
      }]
    } else {
      console.log('No track data')
    }
  }

  addDataToPlayer()
  console.log(value)
  console.log(trackToPlay[0])
  console.log(Boolean(track.title) + ' : track.title boolean')

  return (
    <div>
      {value ?
        <AudioPlayer
          audioFiles={value}
        />
        :
        <p>No track selected</p>}
    </div>
  )
}

export default Player
//* This is exported into the footer component
