import {React, useContext} from 'react'
import { LayoutContext } from './Layout'

import {HeroHome,AboutUs,AboutTheTeam,FAQ} from '../components/home'
import PaymentOptions from '../components/PaymentOptions'
const Home = () => {
  return (
    <>
      <HeroHome />
      <AboutUs />
      <AboutTheTeam />
      <PaymentOptions />
      <FAQ />
    </>
  );
};

export default Home