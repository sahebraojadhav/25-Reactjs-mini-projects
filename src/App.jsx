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
import CustomProgressBar from './components/11.custom -progress-bar'
import BmiCalculator from './components/12.bmi-calculator'
import ButtonRippleEffect from './components/13.bubble-ripple-effect'
import DragAndDropCustomImplementation from './components/14.DragAndDrop'
import FileStructure from './components/15.folder-structure/components/FileStructure'
import Application from './components/14..drag-and-drop'
import Practise from './components/16.practise/Practise'
import TickTacToe from './components/17.tic-tac-toe/TickTacToe'
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
        <CustomProgressBar/>
        <BmiCalculator/>
        <ButtonRippleEffect/>
        <DragAndDropCustomImplementation/>
        <FileStructure/>
        <Application/>
        <Practise/>
        <TickTacToe/>
    </>
  )
}

export default App
