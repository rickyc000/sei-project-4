import React from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { isAuthenticated, logout } from '../../lib/auth'
import { getUserProfile, headers } from '../../lib/api'

import Banner from './Banner'


function Nav() {
  const [profile, setProfile] = React.useState({})
  const [hasError, setHasError] = React.useState(false)
  console.log('nav rendering')
  const isLoggedIn = isAuthenticated()
  const { pathname } = useLocation()

  const handleLogout = () => {
    // setIsLoggedIn(false)
    logout()
    history.push('/')
  }

  console.log('isAuthenticated? ' + isAuthenticated())


  const history = useHistory()

  React.useEffect(() => {
    const getProfile = async () => {
      try {
        const { data } = await getUserProfile(headers())
        setProfile(data)
        setHasError(false)
      } catch (err) {
        console.log(err)
        setHasError(true)
      }
    }
    getProfile()
  }, [pathname])

  console.log('hasError? ' + hasError)

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