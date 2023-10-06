import React,{useEffect} from 'react';
import './DetailPage.css';
import { useSelector } from 'react-redux'; // Import useSelector
import { useParams } from 'react-router-dom';
import { fetchData, exercisesoptions } from "./Data";



function DetailPage() {

  const { id } = useParams();
  const selectedExercise = useSelector((state) => state.exercise); 



 return (
    <div className='detail-page'>
        {selectedExercise && selectedExercise.id === id && (
          <div className='detail__img'>
            <img src={selectedExercise.gifUrl} alt='' />
            <div className='detail__detail'>
             <h1>{selectedExercise.name}</h1>
            <p className='detail__inst'>{selectedExercise.instructions}</p>
<div className='detail__bodypart'>
<img src='https://freepngimg.com/save/77624-lotus-position-yoga-exercise-free-clipart-hd/601x600' alt='' />
<p>{selectedExercise.bodyPart}</p>
        </div>
<div  className='detail__bodypart'>
       <img src='https://static.thenounproject.com/png/637461-200.png' alt='' />
            <p>{selectedExercise.target}</p>
            </div>
            <div  className='detail__bodypart'>
            <img src='https://static.thenounproject.com/png/4516634-200.png' alt='' />
            <p>{selectedExercise.equipment}</p>
            </div>
            </div>
          </div>
          
        )}

   <h1 className='detail__watch'>watch <span>{selectedExercise.name}</span> videos</h1>

   
    </div>
  );
}

export default DetailPage;
