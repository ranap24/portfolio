import './App.css'
import Homepage from './components/Homepage/Homepage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './components/About/About'
import RootLayout from './components/RootLayout/RootLayout'

function App() {

  const router = createBrowserRouter([
    {
      path : '/',
      element : <RootLayout/>,
      children : [
        {
          index : true,
          element : <Homepage/>
        },
        {
          path : 'about',
          element : <About/>
        }
      ]
    }
  ])
  return (
      <RouterProvider router={router}/>
  )
}

export default App
