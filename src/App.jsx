import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {Layout, Home, About, Discover, Login, Signup, Error, Profile,SubmitEvent} from './assets/pages/index'

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
          path : '/signup',
          element : <Signup />,
          // action: SignupAction
        },
        {
          path : '/login',
          element : <Login />,
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
