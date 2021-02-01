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


function App() {
  const [value, setValue] = useState([{
    src: 'https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview124/v4/0d/f5/24/0df524db-66cc-d86c-99c1-a4154e52591d/mzaf_2003405613409183223.plus.aac.p.m4a',
    title: 'test',
    artist: 'test'
  }])

  return (
    <BrowserRouter>
      <TrackContext.Provider value={{ value, setValue }}>
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
      </ TrackContext.Provider>
    </BrowserRouter>
  )
}


export default App
