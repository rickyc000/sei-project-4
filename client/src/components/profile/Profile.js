import React from 'react'
import { getUserProfile, headers } from '../lib/api'
import FavouriteCard from '../utils/FavouriteCard'

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
      <div className="profile-title-wrapper">
        <div className="profile-title">
          Your Collection
        </div>
      </div>

      <div className="fav-grid-wrapper">
        {profile ?
          <div className="fav-grid">
            {favouritedReleases.map(release => (
              <div key={release.id} className="fav-card">
                <FavouriteCard release={release} />
              </div>
            ))}
          </div>
          :
          <div>Please log in or register</div>
        }
      </div>
    </main >
  )
}

export default Profile