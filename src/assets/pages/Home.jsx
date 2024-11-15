import {React, useContext} from 'react'
import { LayoutContext } from './Layout'

const Home = () => {
  const {currentUser} = useContext(LayoutContext)
  return (
    <div>Hi {currentUser?.email}</div>
  )
}

export default Home