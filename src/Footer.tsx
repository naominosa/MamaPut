// import React from 'react'
import home from './assets/heroicons-solid_home.png'
import love from './assets/heart.png'
import user from './assets/user.png'
import history from './assets/Vector.png'
import { Link, } from 'react-router-dom';
function Footer() {
  return (
    <div>
      <div className='set' >
      <Link to="/ThirdScreen">
        <img src={home} alt="Home"/>
      </Link>

      <Link to="/Orders">
        <img src={love} alt="Orders" />
      </Link>

      <Link to="/User">
        <img src={user} alt="User" />
      </Link>

      <Link to="/History">
        <img src={history} alt="History" />
      </Link>
</div>
    </div>
  )
}

export default Footer
