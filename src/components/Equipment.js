import React,{useEffect, useState} from 'react';
import "./Equipment.css";
import { useSelector } from 'react-redux';
import { fetchData, exercisesoptions } from "./Data";
import Excercise from './Excercise';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Equipment() {

    const selectedExercise = useSelector((state) => state.exercise); 

const[equip, setEquip] = useState([]);

    useEffect(() => { 
        const smilerEquiment = async () => {
            const equipment = await fetchData(
                `https://exercisedb.p.rapidapi.com/exercises/equipment/${selectedExercise.equipment}?limit=1400`,exercisesoptions
              );
              console.log("similar",equipment);
              setEquip(equipment);
            }
              smilerEquiment();

    },[selectedExercise.equipment])


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
    <h1 className='head'>Excercises that use the same equipment</h1>

    <div className='equip'>
    <Slider {...settings}> 

{equip.map((exerciseData, index) => (
        <Excercise key={index} exercise={exerciseData } />
      ))}
      </Slider>   
</div>

</div>

  );
}

export default Equipment;