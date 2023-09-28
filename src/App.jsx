import { useState } from 'react'
import './App.css'
import HeaderIcon from './Components/HeaderIcon/HeaderIcon'
import Images from './Components/Images/Images'
import SearchBar from './Components/SearchBar/SearchBar'
import ThemeContextProvider from './Context/ThemeContextProvider'


function App() {

  return (
    <ThemeContextProvider >
      <div className='main-container'>
      <HeaderIcon />
      <SearchBar />
      <Images />
      <button className='showMore-button'>Show More</button>
    </div>
    </ThemeContextProvider>
    
  )
}

export default App
