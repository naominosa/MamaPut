// import { useState } from 'react'
import './App.css'
import WelcomeScreen from './WelcomeScreen'
import { Route,Routes } from 'react-router-dom'
import ThirdScreen from './ThirdScreen'
import CustomDrinks from './CustomDrinks'
import CustomSnacks from './CustomSnacks'
import CustomProteins from './CustomProtein'
import Orders from './Orders'
import User from './User'
import History from './History'
import AddToCart from './AddToCart';
import Login from './login'
import SignUp from './SignUp'
function App() {

  return (
    <>
   <Routes>
        <Route path="/" element={<WelcomeScreen />} />
        <Route path="/WelcomeScreen" element={<WelcomeScreen/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/SignUp" element={<SignUp/>} />
        <Route path="/ThirdScreen" element={<ThirdScreen />} />
        <Route path="/CustomDrinks" element={<CustomDrinks />} />
        <Route path="/CustomSnacks" element={<CustomSnacks />} />
        <Route path="/CustomProteins" element={<CustomProteins />} />
        <Route path="/Orders" element={<Orders/>}/>
        <Route path="/User" element={<User/>}/>
        <Route path="/History" element={<History/>}/>
        <Route path="/AddToCart" element={<AddToCart/>}/>

      </Routes>
    </>
  )
}

export default App
