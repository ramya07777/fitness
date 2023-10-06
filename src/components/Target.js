import React,{useEffect, useState} from 'react';
import { useSelector } from 'react-redux';
import { fetchData, exercisesoptions } from "./Data";
import Excercise from './Excercise';
import "./Equipment.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Target() {

    const selectedExercise = useSelector((state) => state.exercise); 

    const[target, setTarget] = useState([]);
    
 useEffect(() => {

    const fetchDataAndLog = async () => {
      
const target = await fetchData(
  `https://exercisedb.p.rapidapi.com/exercises/target/${selectedExercise.target}?limit=1400`,exercisesoptions
);
console.log(target);
setTarget(target);
      
    };
  
       fetchDataAndLog();
  }, [selectedExercise.target]);
  
  const settings = {
    
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

 

  return (
<div className='equip_equip'>
    <h1 className='head'>Excercises that use the same muscle group</h1>

    <div className='equip'>
    <Slider {...settings}> 
{target.map((targetData, index) => (
        <Excercise key={index} exercise={targetData } />
      ))}

      </Slider>   
</div>

</div>
  );
}

export default Target;