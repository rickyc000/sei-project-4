import React, { useContext } from 'react'
// import React from 'react'

import { Link, useHistory, useLocation } from 'react-router-dom'
import { isAuthenticated, logout } from '../../lib/auth'
import { getUserProfile, headers } from '../../lib/api'
import { FavouriteContext } from '../../../FavouriteContext'

import Banner from './Banner'


function Nav() {
  const [profile, setProfile] = React.useState({})
  const { favourites, setFavourites } = useContext(FavouriteContext)
  console.log('nav render')
  const isLoggedIn = isAuthenticated()
  const { pathname } = useLocation()

  const handleLogout = () => {
    logout()
    history.push('/')
  }

  const history = useHistory()
  

  React.useEffect(() => {
    const getProfile = async () => {
      try {
        const { data } = await getUserProfile(headers())
        setProfile(data)
        setFavourites(0)
      } catch (err) {
        console.log(err)
      }
    }
    getProfile()
  }, [pathname, favourites])

  return (
    <header>

      <div className="navbar-wrapper">


        <div className="navbar-section">
          <Link to='/'>
            <div className="navbar-option">Home</div>
          </Link>
          <Link to='/genres/all/'>
            <div className="navbar-option">Genres</div>
          </Link>
        </div>


        {!isLoggedIn ?
          <div className="navbar-section">
            <Link to='/login/'>
              <div className="navbar-option">Login</div>
            </Link>
            <Link to='/register/'>
              <div className="navbar-option">Register</div>
            </Link>
          </div>
          :
          <div className="navbar-section">
            <Link to='/profile/'>
              <div className="navbar-option">
                {profile.username}

                {profile.favouritedReleases &&
                  <div>
                    <i className="fas fa-record-vinyl"></i>
                    {profile.favouritedReleases.length}
                    {/* {favouriteCount} */}
                  </div>
                }
              </div>
            </Link>
            <div
              className="navbar-option"
              onClick={handleLogout}>
              Log Out
            </div>
          </div>
        }
      </div>




      <Banner />


    </header>
  )
}

export default Nav