import menu from './assets/menus.png';
import cart from './assets/grocery-cart.png';
import './ThirdScreen.css';
import Input from './GeneralSearch';
import Footer from './Footer';
import DrinksCarousel from './DrinksCarousel';
import { Link, useLocation } from 'react-router-dom';

function CustomDrinks() {
  const location = useLocation();

  const getActiveTab = () => {
    if (location.pathname === '/ThirdScreen') return 'Food';
    if (location.pathname === '/CustomDrinks') return 'Drink';
    if (location.pathname === '/SnacksCarousel') return 'Snack';
    if (location.pathname === '/CustomProteins') return 'Protein';
    return '';
  };
  const active = getActiveTab();

  return (
    <div>
<div className='third-screen'>
      <div className="icons">
        <img className='icon-images' src={menu} alt="" />
        <img className='icon-images' src={cart} alt="" />
      </div>

      <div className='food-text'>
        <h3>
          Delicious <br />
          Drinks for you
        </h3>
      </div>

      <div>
        <Input className='third-screen-input' placeholder='Thirsty?💦' />
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

          <Link  className='link' to='/CustomSnacks'  >
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
        <DrinksCarousel/>
      </div>
       <div>
<Footer/>
      </div>
    </div>
   
    </div>
    
  );
}

export default CustomDrinks;