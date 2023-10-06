import React, { useEffect } from 'react';
import "./Searchbar.css";
import { useState } from 'react';
import { fetchData, exercisesoptions } from "./Data";
import Bodypart from './Bodypart';
import Result from "./Result";




function Searchbar() {
const [search, setSearch] = useState("");
const [exe, setExe] = useState([]);
const [bodypart, setBodyPart] = useState([]);


useEffect(()=>{
const bodyExercise = async () => {
    const bodyPartData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exercisesoptions);
       setBodyPart([bodyPartData]);
     console.log(bodyPartData);
}
bodyExercise();
},[])

const handleInputChange = (e) => {
    setSearch(e.target.value.toLowerCase());
     };


     const handleSearchClick = async () => {

      
        if (search) {
          try {
            const response = await fetchData(
                'https://exercisedb.p.rapidapi.com/exercises?limit=1400',
              exercisesoptions
            );
            console.log(response);
    
            const dataexe = response.filter(
              (exercise) =>
              exercise.name.toLowerCase().includes(search) ||
              exercise.target.toLowerCase().includes(search) ||
              exercise.bodyPart.toLowerCase().includes(search) ||
              exercise.equipment.toLowerCase().includes(search)
              );
            setSearch("");
            setExe(dataexe);
            console.log(dataexe);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
      };

      const handleBodyPartClick = async (selectedBodyPart) => {
        if (selectedBodyPart) {
          try {
            const clickbody = await fetchData(
              'https://exercisedb.p.rapidapi.com/exercises?limit=1400',
              exercisesoptions
            );
            console.log("Response from API when clicking body part:", clickbody);
           const clickexe = clickbody.filter((exercise) =>
            exercise.bodyPart &&
            exercise.bodyPart.toLowerCase() === selectedBodyPart.toLowerCase()
          );
          console.log("Filtered exercises after clicking body part:", clickexe);
          setExe(clickexe);
              console.log("hi",clickexe);
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
        console.log("Clicked body part:", selectedBodyPart);
      };
      
  
     
  return (
    <div className='searchbar'>
    <p>Awesome Excerises you Should Know</p>
    <div className='search__search'>
    <input className='search__input' type='text' value={search} onChange={handleInputChange} placeholder='search Excerises' />
    <button onClick={handleSearchClick} className='search__button'>Search</button>
    </div>

{bodypart.map((part) => (
  <Bodypart key={part.id} part={part} onBodyPartClick={handleBodyPartClick} 
      />
))}

<h1 className='searchbar__showing'>Showing Result</h1>
<Result exe={exe} />
  </div>
  )
  

}

export default Searchbar;

