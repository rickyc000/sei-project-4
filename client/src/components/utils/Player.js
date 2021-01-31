import React from 'react'
// import Footer from '../common/Footer'
// import AudioPlayer from 'react-modular-audio-player'

function Player(track, artistName) {
  console.log('rendering Player')
  
  // const [playerActive, setPlayerActive] = React.useState(false)

  //* Sets default info needed for Audio player
  let trackToPlay = [{
    src: '',
    title: '',
    artist: ''
  }]

  // setPlayerActive(Boolean(track))
  // Footer()
  // React.useEffect(() => {
  //   try {
  //     console.log('hi')
  //     trackToPlay = [{
  //       src: track.preview_URL,
  //       title: track.title,
  //       artist: artistName
  //     }]
  //     setTune(trackToPlay)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }, [])
  // console.log(playerActive)

  // React.useEffect(() => {
  //   try {
  //     addDataToPlayer()
  //     // setPlayerActive(true)
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }, [])

  function addDataToPlayer() {
    if (track.title) {
      trackToPlay = [{
        src: track.preview_URL,
        title: track.title,
        artist: artistName
      }]
      // setPlayerActive(true)
    } else {
      console.log('nothing yet')
      // setPlayerActive(false)
    }
  }

  addDataToPlayer()

  console.log(trackToPlay[0])
  console.log(Boolean(track.title))


  return (

    <div>
      { typeof (track.title)}
    </div>

  // <div>
  //   {track.title ?
  //     <AudioPlayer
  //       audioFiles={trackToPlay}
  //     />
  //     :
  //     <p>nothing</p>}
  // </div>

  )
}

export default Player


