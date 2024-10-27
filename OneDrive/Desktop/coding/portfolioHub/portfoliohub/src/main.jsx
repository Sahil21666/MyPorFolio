import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Contact from './components/contact'
import Portfolio from './components/Portfolio'
import About from './components/About'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Home from './components/Home'


const router = createBrowserRouter(
  [
    {
      path : '/',
      element : <App/>,
      children : [
        {
          path : '/',
          element : <Home/>
        },
        {
          path : '/about',
          element :<About/>
           
        },
        {
          path : '/portfolio',
          element : 
           
              <Portfolio/>
           
          
        },
        {
          path : '/contact',
          element :
          
              <Contact/>
           
        }
      ]
    }
  ])
  


createRoot(document.getElementById('root')).render(
  <StrictMode>
   
    <RouterProvider router={router}/>

  </StrictMode>,
)
