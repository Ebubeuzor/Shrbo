import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ListingInfoMain from './Views/ListingInfo/ListingInfoMain'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ListingInfoMain/>
    </>
  )
}

export default App
