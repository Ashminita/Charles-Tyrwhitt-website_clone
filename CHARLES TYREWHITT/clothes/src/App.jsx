import React from 'react'
import AllRoutes from './Components/AllRoutes'
import HomePage from './Pages/Homepage';
import Home from './Pages/Home';
const App = () => {
  return (
    <>
        <AllRoutes/>
        <HomePage/>  
        <Home src="https://player.vimeo.com/progressive_redirect/playback/960180527/rendition/720p/file.mp4?loc=external&signature=4b5dc3c13d30a8c8c6e209c169e07a24982c5f5d5bc7a74b83191f2103cc53f5"/>
    </>
  )
}

export default App