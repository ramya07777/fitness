import React,{useEffect, useState} from 'react';
import "./Videos.css";
import { fetchData, YoutubeOptions } from "./Data";
import { useSelector } from 'react-redux'; // Import useSelector
import './DetailPage.css';

function Videos() {

    const selectedExercise = useSelector((state) => state.exercise); 

    const [videos, setVideos] = useState([]);
    
  useEffect(() => {
    const fetchDataAndLog = async () => {
      
        // Make an API request to the specified URL
        const bodyPartData = await fetchData(
          `https://youtube-search-and-download.p.rapidapi.com/search?query=${selectedExercise.name}`,
          YoutubeOptions
        );
        console.log(bodyPartData.contents);
        setVideos(bodyPartData.contents);

    };
 
    fetchDataAndLog();
  }, [selectedExercise.name]);
  return (
      
    <div className='videos'>
     {videos && videos.length > 0 && (
        <>
{videos?.slice(0,3).map((watch, index) => (
    <div className='videos__videos'>
    <div className='video__Center'>
    <a 
          key={index}
          href={`https://www.youtube.com/watch?v=${watch.video.videoId}`}
          target="_blank" // Opens the link in a new tab
          rel="noopener noreferrer" // Recommended for security
        >
<img  className='videos__img'   src={watch.video.thumbnails[0].url} // Provide the image source URL here
            alt={watch.video.title} // Provide alt text for accessibility
          />
           

   </a>  
   </div>
   <h1 className='video__title'>{watch.video.title}</h1>
            <h3 className='video__channel'> {watch.video.channelName}</h3>   
</div>
        ))}
        </>
        )}
    </div> 
    
     );
}

export default Videos;

        