import React, { useContext } from 'react'
import Player from '../utils/Player'
import { TrackContext } from '../../TrackContext'


function Footer() {

  const { trackToPlay } = useContext(TrackContext)
  console.log(trackToPlay[0].footerPosition)

  return (
    <footer className="footer-wrapper">
      <div className="footer" style={{ bottom: trackToPlay[0].footerPosition }}>
        <Player />
      </div>
    </footer>
  )
}

// export { test, Footer }
export default Footer