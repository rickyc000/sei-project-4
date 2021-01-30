import React from 'react'
import { useParams, useHistory, Link } from 'react-router-dom'
import { getSingleTag } from '../../components/lib/api'

function Genres() {

  const { id } = useParams()
  const history = useHistory()

  const [genrePageReleases, setGenrePageReleases] = React.useState(null)

  const getReleases = async (id) => {
    try {
      const { data } = await getSingleTag(id)
      const taggedReleases = data.tags
      setGenrePageReleases(taggedReleases)
    } catch (err) {
      console.log(err)
    }
  }

  React.useEffect(() => {
    getReleases(id)
  }, [])

  const handleChange = event => {
    getReleases(event.target.value)
    history.push(`/genres/${event.target.value}/`)
  }


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
                  <Link to={`/release/${release.id}/`}>
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



      </div>
    </main>
  )
}

export default Genres