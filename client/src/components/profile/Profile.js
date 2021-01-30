import React from 'react'
import { getUserProfile, headers } from '../lib/api'

function Profile() {

  const [profile, setProfile] = React.useState({})
  const [favouritedReleases, setFavouriteReleases] = React.useState([])

  React.useEffect(() => {
    const getProfile = async () => {
      try {
        const { data } = await getUserProfile(headers())
        // console.log(data)
        setProfile(data)
        setFavouriteReleases(data.favouritedReleases)
      } catch (err) {
        console.log(err)
      }
    }
    getProfile()
  }, [])

  console.log(profile)
  console.log(favouritedReleases)

  return (
    <main>
      Profile page
      <div>
        {profile ?
          <div>
            Username: {profile.username}
            {favouritedReleases.map(release => (
              <div key={release.id}>
                {release.title}
                <img
                  src={release.artwork}
                  alt={release.title}
                  width='200px'
                />
              </div>
            ))}
          </div>
          :
          <div>Please log in or register</div>
        }
      </div>
    </main>
  )
}

export default Profile