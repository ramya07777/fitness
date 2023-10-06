import React from 'react';
import "./Excercise.css";
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'; // Import useDispatch
import { setSelectedExercise } from "../Reduxtoolkit/exerciseSlice";

function Excercise({exercise}) {


 const dispatch = useDispatch(); // Get the dispatch function

 const handleClick = () => {
   // Dispatch the selected exercise to the Redux store
   dispatch(setSelectedExercise(exercise));
   
 };
   
  return (
    <Link className='link' onClick={handleClick}  to={`detail/${exercise.id}`}>
    <div className='exercise'>
    <div className='exercise__exercise'>
       <hr className='line' />
    <img className='exercise__image' src={exercise.gifUrl} alt='' />
    <div className='exercise__bottom'>
    <div className='button'><button className='body__button'>{exercise.bodyPart}</button>
<button className='target__button'>{exercise.target}</button></div>

<p>{exercise.name}</p>
</div>
    </div>

    </div>
    </Link>
  )
}

export default Excercise;