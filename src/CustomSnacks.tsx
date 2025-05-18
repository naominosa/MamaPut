import menu from './assets/menus.png';
import cart from './assets/grocery-cart.png';
import './ThirdScreen.css';
import Input from './GeneralSearch';
import home from './assets/heroicons-solid_home.png'
import love from './assets/heart.png'
import user from './assets/user.png'
import history from './assets/Vector.png'
import SnacksCarousel from './SnacksCarousel';
import { Link, useLocation } from 'react-router-dom';

function CustomSnacks() {
  const location = useLocation();

  // Determine the active tab based on the current pathname
  const getActiveTab = () => {
    if (location.pathname === '/ThirdScreen') return 'Food';
    if (location.pathname === '/CustomDrinks') return 'Drink';
    if (location.pathname === '/CustomSnacks') return 'Snack';
    if (location.pathname === '/CustomProteins') return 'Protein';
    return '';
  };
  const active = getActiveTab();

  return (
    <div className='third-screen'>
      <div className="icons">
        <img className='icon-images' src={menu} alt="" />
        <img className='icon-images' src={cart} alt="" />
      </div>

      <div className='food-text'>
        <h3>
          Delicious <br />
          treats for you
        </h3>
      </div>

      <div>
        <Input className='third-screen-input' placeholder='Something Sweet?' />
      </div>
      <div>
        <ul className="listed">
          <Link className='link' to="/ThirdScreen">
            <li className={active === "Food" ? "active" : ""}>
              Food
            </li>
          </Link>
          <Link className='link' to="/CustomDrinks">
            <li className={active === "Drink" ? "active" : ""}>
              Drink
            </li>
          </Link>

          <Link className='link' to="/CustomSnacks" >
          <li className={active === "Snack" ? "active" : ""}>
            Snack
          </li>
          </Link>
          
         <Link className='link' to='/CustomProteins' >
          <li className={active === "Protein" ? "active" : ""}>
            Protein
          </li>
         </Link>

        </ul>
      </div>
      <div className='caro'>
        <SnacksCarousel/>
      </div>
      <div className='icons-navigation' >
        <ul className='navigate'>
          <li className='navigate-icons'><img src={home} alt="" /></li>
          <li className='navigate-icons' ><img src={love} alt="" /></li>
          <li className='navigate-icons' ><img src={user} alt="" /></li>
          <li className='navigate-icons' ><img src={history} alt="" /></li>
        </ul>
      </div>
    </div>
  );
}

export default CustomSnacks;