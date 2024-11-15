<<<<<<< Updated upstream
import {React, useContext} from 'react'
import { LayoutContext } from './Layout'

=======
import React from 'react'
import {HeroHome,AboutUs,AboutTheTeam,FAQ} from '../components/home'
>>>>>>> Stashed changes
const Home = () => {
  const {currentUser} = useContext(LayoutContext)
  return (
<<<<<<< Updated upstream
    <div>Hi {currentUser?.email}</div>
  )
}
=======
    <>
      <HeroHome />
      <AboutUs />
      <AboutTheTeam />
      <FAQ />
    </>
  );
};
>>>>>>> Stashed changes

export default Home