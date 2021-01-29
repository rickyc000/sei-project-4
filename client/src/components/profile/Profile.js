import React from 'react'
import { getUserProfile, headers } from '../lib/api'

function Profile() {

  const [profile, setProfile] = React.useState({})


  React.useEffect(() => {
    const getProfile = async () => {
      try {
        const { data } = await getUserProfile(headers())
        // console.log(data)
        setProfile(data)
      } catch (err) {
        console.log(err)
      }
    }

    

    getProfile()
  }, [])

  return (
    <main>
      Profile page
      <div>
        {profile ?
          <div>
            Username: {profile.username}
            {/* {profile.favouritedReleases} */}
          </div>
          :
          <div>Please log in or register</div>
        }
      </div>
    </main>
  )
}

export default Profile