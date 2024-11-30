import React from 'react'
import './App.css'
import Layout from './Layout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Pages/Home'

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
