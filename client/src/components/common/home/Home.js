import React from 'react'

import FeaturedSection from './FeaturedSection'
import NewReleasesSection from './NewReleases'
import LabelFeatureSection from './LabelFeatureSection'



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



      




    </main >
  )


}


export default Home