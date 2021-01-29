import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { isAuthenticated, logout } from '../lib/auth'
import { getUserProfile, headers } from '../lib/api'


function Nav() {

  const [profile, setProfile] = React.useState({})
  const [isLoggedIn, setIsLoggedIn] = React.useState(isAuthenticated())

  console.log(isAuthenticated() + ' is Authenticated')

  
  const handleLogout = () => {
    setIsLoggedIn(false)
    logout()
    history.push('/')
  }
  console.log(isLoggedIn + ' :isLoggedIn')

  const history = useHistory()

  

  React.useEffect(() => {
    const getProfile = async () => {
      try {
        const { data } = await getUserProfile(headers())
        setProfile(data)
      } catch (err) {
        console.log(err)
        // setHasError(true)
      }
    }
    if (isLoggedIn) {
      getProfile()
    } else {
      return 
    }
  }, [])

  console.log(profile)
  // setIsLoggedIn(isAuthenticated())

  return (
    <header>

      <Link to='/'>
        Home
      </Link>

      {!isLoggedIn ?
        <div>
          <Link to='/login/'>
            <div>Log In</div>
          </Link>
          <Link to='/register/'>
            <div>Register</div>
          </Link>
        </div>
        :
        <div>
          <div>
            <Link to='/profile/'>
              Account
            </Link>
          </div>
          <div
            onClick={handleLogout}>
            Log Out
          </div>
        </div>
      }


    </header>
  )
}

export default Nav