import React from 'react'
import { getSingleTag } from '../../lib/api'
import { Link } from 'react-router-dom'



function Home() {

  const [featuredReleases, setFeaturedReleases] = React.useState(null)
  const [hasError, setHasError] = React.useState(false)

  React.useEffect(() => {
    const getReleases = async () => {
      try {
        const { data } = await getSingleTag(10)
        const taggedReleases = data.tags
        setFeaturedReleases(taggedReleases)
      } catch (err) {
        console.log(err)
        setHasError(true)
      }
    }
    getReleases()
  }, [])

  console.log(featuredReleases)
  console.log(hasError)

  return (
    <main>
      Home Contents:

      <div>
        {featuredReleases ?
          <div>
            {featuredReleases.map(release => (
              <div key={release.id}>
                <Link to={`/release/${release.id}`}>
                  <div> {release.title} </div>
                  <div>
                    <img
                      key={release.id}
                      src={release.artwork}
                      alt={release.title}
                      width='300px'
                    />
                  </div>
                </Link>
              </div>
            ))}
          </div>
          :
          <div>Loading</div>
        }

      </div>




    </main >
  )


}


export default Home