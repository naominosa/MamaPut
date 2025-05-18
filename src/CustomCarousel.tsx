import React from 'react'
    import './CustomCarousel.css'
interface CarouselProps {
     children?: React.ReactNode; 

  src?: string;
  NameOfFood?: string;
  Price?:number;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function CustomCarousel({src,NameOfFood,Price }:CarouselProps ) {

  return (
    <div className='contain'>
      <div className="contained">
        <img className='food' src={src} alt="food-image" />
        <h5>{NameOfFood}</h5>
        {Price !== undefined && (
          <span>₦{Price.toLocaleString()}</span>
        )}
        {/* <p>{Price}</p> */}
      </div>
    </div>
  )
}

export default CustomCarousel
