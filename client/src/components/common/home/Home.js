import React from 'react'

import FeaturedSection from './FeaturedSection'
import NewReleasesSection from './NewReleases'
import LabelFeatureSection from './LabelFeatureSection'
import ArtistFocusSection from './ArtistFocusSection'

import { Link } from 'react-router-dom'



function Home() {


  return (
    <main>


      <section className="homepage-section">
        <FeaturedSection />
      </section>

      <section className="homepage-section">
        <LabelFeatureSection />
      </section>

      <section className="homepage-section">
        <NewReleasesSection />
      </section>

      <section className="homepage-section">
        <div className="homepage-genre-wrapper">
          <div className="parallax">
            <Link to={'/genres/all/'}>
              <div className="homepage-genre-section-title">
                Explore Genres
              </div>
            </Link>
          </div>
        </div>
      </section >

      <section className="homepage-section">
        <ArtistFocusSection />
      </section>




    </main >
  )


}


export default Home