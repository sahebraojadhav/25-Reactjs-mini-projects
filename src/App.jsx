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
import CurrencyConverter from './components/7.currency-converter'
import FilterProduct from './components/8.FilterProduct'
import RenderRandom from './components/8.FilterProduct/text'
import TipCalculator from './components/9.tip-calculator'
import MusicPlayer from './components/10.music-player'
import OwnMusicPlayer from './components/10..music-player'
function App() {

  return (
    <>
        <PaginationTest/>
        <DigitalClock/>
        <CountdownTimmerTest/>
        <StepProgressBarTest/>
        <RandomQuoteGenerator/>
        <ToooltipTest/>
        <CurrencyConverter/>
        <FilterProduct/>
        <RenderRandom/>
        <TipCalculator/>
        <MusicPlayer/>
        <OwnMusicPlayer/>
    </>
  )
}

export default App
