import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PaginationTest from './PaginationTest'
import DigitalClock from './components/2. digital-clock/DigitalClock'
import CountdownTimmerTest from './components/3.countDown/test'
import StepProgressBarTest from './components/4.progressBar/test'
import RandomQuoteGenerator from './components/5.RandomQuoteGenerator'
import ToooltipTest from './components/6.ToolTipTest/test'
function App() {

  return (
    <>
        <PaginationTest/>
        <DigitalClock/>
        <CountdownTimmerTest/>
        <StepProgressBarTest/>
        <RandomQuoteGenerator/>
       <ToooltipTest/>
    </>
  )
}

export default App
