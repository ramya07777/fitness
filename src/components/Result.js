import React,{useState} from "react";
import "./Searchbar.css";
import Excercise from './Excercise';
import { Pagination } from 'antd';
import "./Result.css";

function Result({exe}) {
  const exercisesPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1); // Ant Design's Pagination starts at 1

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

 
  const startIndex = (currentPage - 1) * exercisesPerPage;
  const endIndex = startIndex + exercisesPerPage;
  const displayedExercises = exe.slice(startIndex, endIndex);
  const totalExercises = exe.length;
 

  return (
    <div>
    <div className='search__exercise'>

    {displayedExercises.map((exercise) => (
      <Excercise key={exercise.id}
      exercise={exercise}
      />
            ))} 

            </div>   

            {displayedExercises.length > 0 &&
<Pagination className="page"
          current={currentPage}
          pageSize={exercisesPerPage}
          total={totalExercises}
          onChange={handlePageChange}
          showSizeChanger={false}
          itemRender={(page, type, originalElement) => {
            if (type === 'prev') {
              return <a>Previous</a>;
            }
            if (type === 'next') {
              return <a>Next</a>;
            }
            return originalElement;
          }}
        /> }
 </div>


  )
}

export default Result;