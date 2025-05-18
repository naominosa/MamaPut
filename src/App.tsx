// import { useState } from 'react'
import './App.css'
import WelcomeScreen from './WelcomeScreen'
import { Route,Routes } from 'react-router-dom'
import ThirdScreen from './ThirdScreen'
import CustomDrinks from './CustomDrinks'
import CustomSnacks from './CustomSnacks'
import CustomProteins from './CustomProtein'
function App() {

  return (
    <>
   <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/WelcomeScreen" element={<WelcomeScreen />} />
        <Route path="/ThirdScreen" element={<ThirdScreen />} />
        <Route path="/CustomDrinks" element={<CustomDrinks />} />
        <Route path="/CustomSnacks" element={<CustomSnacks />} />
        <Route path="/CustomProteins" element={<CustomProteins />} />

      </Routes>
    </>
  )
}

export default App
