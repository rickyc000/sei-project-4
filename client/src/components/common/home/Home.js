import React from 'react'

import FeaturedSection from './FeaturedSection'
import NewReleases from './NewReleases'



function Home() {


  return (
    <main>


      <section className="homepage-section">
        <FeaturedSection />
      </section>

      <section className="homepage-section">
        <NewReleases />
      </section>


      




    </main >
  )


}


export default Home