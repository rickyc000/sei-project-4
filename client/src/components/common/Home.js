import React from 'react'
import { getSingleArtist } from '../lib/api'



function Home() {

  const [releases, setReleases] = React.useState(null)
  const [hasError, setHasError] = React.useState(false)

  React.useEffect(() => {
    const getReleases = async () => {
      try {
        const { data } = await getSingleArtist(23)
        setReleases(data)

      } catch (err) {
        console.log(err)
        setHasError(true)
      }
    }
    getReleases()
  }, [])

  console.log(releases)
  console.log(hasError)

  return (
    <h1>Home</h1>
  )


}


export default Home