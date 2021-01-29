import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/common/home/Home'
import Nav from './components/common/Nav'
import Footer from './components/common/Footer'

import Register from './components/auth/Register'
import Login from './components/auth/Login'

import ReleaseShow from './components/show/ReleaseShow'
import Genres from './components/common/Genres'


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/release/:id" component={ReleaseShow} /> 
        <Route path="/genres/:id" component={Genres} /> 
      </Switch>
      <Footer />
    </BrowserRouter>
  )
}


export default App
