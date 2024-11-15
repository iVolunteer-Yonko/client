import {React, useContext} from 'react'
import { LayoutContext } from './Layout'

import {HeroHome,AboutUs,AboutTheTeam,FAQ} from '../components/home'
const Home = () => {
  return (
    <>
      <HeroHome />
      <AboutUs />
      <AboutTheTeam />
      <FAQ />
    </>
  );
};

export default Home