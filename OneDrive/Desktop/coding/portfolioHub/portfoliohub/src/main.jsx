import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Portfolio from './components/Portfolio.jsx'
import Contact from './components/contact.jsx'

const route = createBrowserRouter([{

  path: '/',
  element: <App />,
  children: [
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/about",
      element: <About />

    },
    {
      path: "/portfolio",
      element: <Portfolio />

    },
    {
      path: "/contact",
      element: <Contact />

    }
  ]



}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route}></RouterProvider>
  </StrictMode>,
)
