import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { getSingleTag } from '../../components/lib/api'

function Genres() {

  const { id } = useParams()

  const history = useHistory()

  // const [tagID, setTagID] = React.useState(id)
  const [genrePageReleases, setGenrePageReleases] = React.useState(null)
  const [hasError, setHasError] = React.useState(false)

  const getReleases = async (id) => {
    try {
      const { data } = await getSingleTag(id)
      const taggedReleases = data.tags
      setGenrePageReleases(taggedReleases)
    } catch (err) {
      console.log(err)
      setHasError(true)
    }
  }

  React.useEffect(() => {
    getReleases(id)
  }, [])

  const handleChange = event => {
    getReleases(event.target.value)
    history.push(`/genres/${event.target.value}/`)
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
          value={id}
          onChange={handleChange}>
          <option value="3">Ambient / Electronic</option>
          <option value="4">Techno / Electro / House</option>
          <option value="5">Jungle / Drum & Bass / Footwork</option>
          <option value="6">Hip-Hop / R&B / Soul</option>
          <option value="7">Alternative / Punk / Rock / Folk</option>
          <option value="8">Dubstep / UKG</option>
          <option value="9">Grime / UK Rap / Drill</option>
        </select>



        <div>
          {genrePageReleases ?
            <div>
              {genrePageReleases.map(release => (
                <div key={release.id}>

                  <div> {release.title} </div>
                  <div>
                    <img
                      key={release.id}
                      src={release.artwork}
                      alt={release.title}
                      width='300px'
                    />
                  </div>

                </div>
              ))}
            </div>
            :
            <div>Loading</div>
          }

        </div>



      </div>
    </main>
  )
}

export default Genres