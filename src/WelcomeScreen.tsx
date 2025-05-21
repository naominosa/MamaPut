// import React from 'react'
import './WelcomeScreen.css'
import Button from './Button'
import Chef from './assets/chefshat.gif'
import { Link } from 'react-router-dom'
function WelcomeScreen() {
  return (
    <div className="first-screen">
        <div className='logo-screen'>
<div className='chefs-hat'>
<img className='chefs-Hat-Img' src={Chef} alt="" />
</div>
<div className='chefs-text'>
    <h1>Food for Everyone</h1>
</div>
        </div>

<div >
<div className="img-button">
      <div className="image-toy">

      </div>
      <div className="bg-overlay" >
      </div>
      <div className="button">
        <Link to='/login'>
<Button className='btn' buttonText="Get started"/>
        
        </Link>

        </div>     
    </div> 
</div>


    
    </div>
  )
}

export default WelcomeScreen
