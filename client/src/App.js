import React, { useState } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/common/home/Home'
import Nav from './components/common/header/Nav'
import Footer from './components/common/Footer'

import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Profile from './components/profile/Profile'

import ReleaseShow from './components/show/ReleaseShow'
import Genres from './components/common/Genres'

import { TrackContext } from './TrackContext'
import { FavouriteContext } from './FavouriteContext'


function App() {
  const [trackToPlay, setTrackToPlay] = useState([{
    src: '',
    title: '',
    artist: '',
    artwork: '',
    footerPosition: '-72px'
  }])
  const [favourites, setFavourites] = useState(null)

  return (
    <BrowserRouter>
      <TrackContext.Provider value={{ trackToPlay, setTrackToPlay }}>
        <FavouriteContext.Provider value={{ favourites, setFavourites }}>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/register/" component={Register} />
            <Route path="/login/" component={Login} />
            <Route path="/release/:id" component={ReleaseShow} />
            <Route path="/genres/:id" component={Genres} />
            <Route path="/profile/" component={Profile} />
          </Switch>
          <Footer />
        </ FavouriteContext.Provider>
      </ TrackContext.Provider>
    </BrowserRouter>
  )
}


export default App
