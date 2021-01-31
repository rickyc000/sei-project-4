import React from 'react'
// import AudioPlayer from 'react-modular-audio-player'
import Player from '../utils/Player'


function Footer() {
  console.log('rendering footer')



  // const [active, setActive] = React.useState(false)


  // if (playerActive) {
  //   setActive(true)
  // } else {
  //   return 
  //   // setActive(false)
  // }

  // console.log(active)
  // const [activeTrack, setActiveTrack] = React.useState({
  //   src: '',
  //   title: '',
  //   artist: ''
  // })

  // React.useEffect(() => {
  //   if (trackToPlay) {
  //     try {
  //       setActiveTrack(trackToPlay)
  //     } catch {
  //       console.log('test')
  //     } 
  //   }
  // }, [trackToPlay])



  // setActiveTrack(trackToPlay)
  // console.log(trackToPlay)
  // const trackToPlay = [
  //   {
  //     src: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview20/v4/32/2b/f0/322bf0cb-d77f-ed0d-24bb-f7e3c79d08db/mzaf_7743957734587616153.plus.aac.p.m4a',
  //     title: 'Actium',
  //     artist: 'Aphex Twin'
  //   }
  // ]
  // // console.log(tune)

  return (
    <footer className="footer-wrapper">

      <div className="footer">




        <Player />
        {/* 
      {activeTrack.title ?
        <AudioPlayer
          audioFiles={trackToPlay}
        />
        :
        <p>loading</p>
      } */}

      </div>

    </footer>
  )
}

// export { test, Footer }
export default Footer