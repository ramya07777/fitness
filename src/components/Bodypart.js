import React from 'react';
import icon from "./1.png";
import "./Bodypart.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function Bodypart({part, onBodyPartClick }) {
  const handleItemClick = (item) => {
    onBodyPartClick(item); // Call the parent component's function
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  
  return (
    <div className='bodypart'>
       <Slider {...settings}> 
 {part.map((item)=> (
    <button key={item.id}  onClick={() => handleItemClick(item)} className='bodypart__item'>
    <img
       className='bodypart__bodypart'
          src={icon}
          alt=''
        />
<p>{item}</p>
</button>
 ))}  
</Slider>

    </div>
  );
}

export default Bodypart;
