import './App.css'
import Homepage from './components/UI/Homepage'
import Navigation from './components/UI/Navigation'
import { BackgroundBeams } from './components/UI/background-beams'

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
    <div className="h-auto w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
       <Navigation/>
       <Homepage/>
      <BackgroundBeams />
    </div>
  )
}

export default App
