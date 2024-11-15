import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import {action as VolunteerSignupAction} from './assets/pages/VolSignup'
import {action as VolunteerLoginAction} from './assets/pages/VolLogin'
import {action as OrganizerSigninAction} from './assets/pages/OrgSignup'
import {action as OrganizerLoginAction} from './assets/pages/OrgLogin'

import {Layout, Home, About, Discover, Error, Profile,SubmitEvent, VolSignup , VolLogin,OrgLogin,OrgSignup,EventPage} from './assets/pages/index'

function App() {
  const router = createBrowserRouter([
    {
      path : '/',
      element: <Layout />,
      errorElement : <Error />,
      children: [
        {
          index : true,
          element : <Home />
        },
        {
          path : '/discover',
          element: <Discover />
        },
        {
          path : '/about',
          element: <About />
        },
        {
          path : '/volunteer-signup',
          element : <VolSignup />,
          action: VolunteerSignupAction
        },
        {
          path : '/volunteer-login',
          element : <VolLogin />,
          action: VolunteerLoginAction
        },
        {
          path : '/organizer-signup',
          element : <OrgSignup />,
          action: OrganizerSigninAction
        },
        {
          path : '/organizer-login',
          element : <OrgLogin />,
          action: OrganizerLoginAction
        },
        
        {
          path : '/profile',
          element : <Profile />
        },
        {
          path : '/event-submit',
          element : <SubmitEvent />
        },
        {
          path : '/event',
          element : <EventPage />
        },
      ]
  }])

  return (
    <RouterProvider router={router} />
  )
}

export default App
