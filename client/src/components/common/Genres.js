import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { getSingleTag } from '../../components/lib/api'

function Genres() {



  const history = useHistory()
  
  const { id } = useParams()
  console.log(id)
  
  const [activeGenre, setActiveGenre] = React.useState(useParams())
  const [genrePageReleases, setGenrePageReleases] = React.useState(null)
  const [hasError, setHasError] = React.useState(false)

  React.useEffect(() => {
    const getReleases = async () => {
      try {
        const { data } = await getSingleTag(activeGenre)
        const taggedReleases = data.tags
        setGenrePageReleases(taggedReleases)
      } catch (err) {
        console.log(err)
        setHasError(true)
      }
    }
    getReleases()
  }, [])

  const handleChange = event => {
    console.log(event.target.value)
    history.push(`/genres/${event.target.value}/`)
    setActiveGenre(event.target.value)
    console.log(activeGenre)
  } 


  console.log(genrePageReleases)
  console.log(hasError)

  return (
    <main>
      Genre page

      <div>

        <select
          name="genres"
          id="genre-select"
          value={activeGenre}
          onChange={handleChange}>
          <option value="3">Ambient / Electronic</option>
          <option value="4">Techno / Electro / House</option>
          <option value="5">Jungle / Drum & Bass / Footwork</option>
          <option value="6">Hip-Hop / R&B / Soul</option>
          <option value="7">Alternative / Punk / Rock / Folk</option>
          <option value="8">Dubstep / UKG</option>
          <option value="9">Grime / UK Rap / Drill</option>
        </select>




      </div>
    </main>
  )
}

export default Genres