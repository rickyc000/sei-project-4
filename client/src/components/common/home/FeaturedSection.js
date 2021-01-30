import React from 'react'
import { getSingleTag } from '../../lib/api'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

// import FeaturedSection from './FeaturedSection'

function FeaturedSection() {


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

  // const handleClick = event => {
  //   console.log(event.target)
  //   // history.push(`/genres/${event.target.value}/`)
  // }


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
    pauseOnHover: true,
    arrows: true
  }

  return (
    <div>
      Featured section

      

      {featuredReleases ?
        <Slider {...settings}>
          {featuredReleases.map(release => (
            <div key={release.id}>
              
              <div> {release.title} </div>
              <div>
                <Link to={`/release/${release.id}`}>
                  <img
                    key={release.id}
                    src={release.artwork}
                    alt={release.title}
                    width='300px'
                    value={release.id}
                    // onClick={handleClick}
                  />
                </Link>
              </div>
              
            </div>
          ))}
        </Slider>
        :
        <div>Loading</div>
      }

      {/* <img className="home-feature-image"
          src="https://f4.bcbits.com/img/a1024330960_10.jpg"
          alt="zenker"
          width="200px"
        />


        <img className="home-feature-image"
          src="https://f4.bcbits.com/img/a0956424764_10.jpg"
          alt="zenker"
          width="200px"
        />

        <img className="home-feature-image"
          src="https://f4.bcbits.com/img/a0047612020_10.jpg"
          alt="zenker"
          width="200px"
        />


        <img className="home-feature-image"
          src="https://media.pitchfork.com/photos/5a7e076f1bcb940ab644b768/1:1/w_320/stankonia.jpg"
          alt="zenker"
          width="200px"
        />

        <img className="home-feature-image"
          src="https://f4.bcbits.com/img/a1821820265_10.jpg"
          alt="zenker"
          width="200px"
        /> */}


      {/* </Slider> */}


      {/* <div>
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
      </div> */}





    </div>
  )
}

export default FeaturedSection