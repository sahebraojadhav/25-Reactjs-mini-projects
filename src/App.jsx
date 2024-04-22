import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PaginationTest from './PaginationTest'
import DigitalClock from './components/2. digital-clock/DigitalClock'
import CountdownTimmerTest from './components/3.countDown/test'
function App() {

  return (
    <>
        <PaginationTest/>
        <DigitalClock/>
        <CountdownTimmerTest/>
    </>
  )
}

export default App
