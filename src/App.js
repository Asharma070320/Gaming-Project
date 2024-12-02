import React from 'react'
import './App.css'
import Layout from './Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Pages/Home'
import Terms_Condition from './components/Pages/Terms_Condition'
import ResponsibleGaming from './components/Pages/ResponsibleGaming'

const App = () => {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <h2>404 Error</h2>,
      children : [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/terms-and-condtions',
          element: <Terms_Condition />
        },
        {
          path:'/responsible-gaming',
          element: <ResponsibleGaming />
        }
      ]
    }
  ])
  return (
    <div className='container'>
      <RouterProvider router={routes} />
    </div>
  )
}

export default App
