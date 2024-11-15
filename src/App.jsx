import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {Layout, Home, About, Discover, Error, Profile,SubmitEvent, VolSignup , VolLogin,OrgLogin,OrgSignup} from './assets/pages/index'

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
          // action: SignupAction
        },
        {
          path : '/volunteer-login',
          element : <VolLogin />,
          // action: LoginAction
        },
        {
          path : '/organizer-signup',
          element : <OrgSignup />,
          // action: SignupAction
        },
        {
          path : '/organizer-login',
          element : <OrgLogin />,
          // action: LoginAction
        },
        
        {
          path : '/profile',
          element : <Profile />
        },
        {
          path : '/event-submit',
          element : <SubmitEvent />
        }
      ]
  }])

  return (
    <RouterProvider router={router} />
  )
}

export default App
