import './App.css'
import Homepage from './components/UI/Homepage'
import Navigation from './components/UI/Navigation'

function App() {

  // const router = createBrowserRouter([
  //   {
  //     path : '/',
  //     element : <RootLayout/>,
  //     children : [
  //       {
  //         index : true,
  //         element : <Homepage/>
  //       },
  //       {
  //         path : 'about',
  //         element : <About/>
  //       }
  //     ]
  //   }
  // ])
  return (
    <div className='p-8'>
      <Navigation/>
      <Homepage/>
    </div>
  )
}

export default App
