import React from 'react'
import { getSingleTag } from '../../lib/api'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'


function FeaturedSection() {

  const [featuredReleases, setFeaturedReleases] = React.useState(null)
  // const [hasError, setHasError] = React.useState(false)

  React.useEffect(() => {
    const getReleases = async () => {
      try {
        const { data } = await getSingleTag(10)
        const taggedReleases = data.tags
        setFeaturedReleases(taggedReleases)
      } catch (err) {
        console.log(err)
        // setHasError(true)
      }
    }
    getReleases()
  }, [])

  // console.log(featuredReleases)
  // console.log(hasError)


  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 5,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 4000,
    // variableWidth: true,
    // pauseOnHover: true,
    arrows: false,
    centerMode: true
  }

  return (
    <div className="home-feature-wrapper">

      <div className="parallax featured-see-more">
        <div className="featured-see-more">
        </div>
      </div>


      <div className="featured-title-wrapper">
        <div className="feature-box-text">
          Featured Albums
        </div>
      </div>

      <div className="home-feature-content">
        {featuredReleases ?
          <Slider {...settings}>
            {featuredReleases.map(release => (
              <div key={release.id} className="slide-content">
                <div>
                  <Link to={`/release/${release.id}`}>
                    <div className="home-feature-artwork-wrapper">
                      <img
                        className="home-feature-image"
                        key={release.id}
                        src={release.artwork}
                        alt={release.title}
                        value={release.id}
                      />
                    </div>
                  </Link>
                </div>
                <div className="home-feature-info-wrapper">
                  <div className="featured-album-artist">
                    {release.artist.name}
                  </div>
                  <div className="featured-album-name">
                    {release.title}
                  </div>
                  <div className="featured-label-name">
                    [{release.label.name}]
                  </div>
                </div>
              </div>
            ))}
          </Slider>
          :
          <div>Loading</div>
        }
      </div>

      <div className="parallax featured-see-more">
        <div className="featured-see-more">
        </div>
      </div>

    </div>
  )
}

export default FeaturedSection