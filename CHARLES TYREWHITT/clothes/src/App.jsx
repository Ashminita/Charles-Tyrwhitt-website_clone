import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Shirt from './Pages/Shirt'
import Pant from './Pages/Pant'
import Suit from './Pages/Suit'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Pant/>
    </>
  )
}

export default App
