import React, { useEffect, useState } from 'react'
import axios from '../axios';

import './Row.css';
import movieTrailer from  "movie-trailer";
import Youtube from 'react-youtube'



const base_url="https://image.tmdb.org/t/p/original/";
const Row = ({title,fetchUrl,isLargeRow}) => {

    
   

    const [movies, setMovies]=useState([]);
    const [trailerUrl,setTrailerUrl]=useState("");


    // A snippet of code which runs based on a 
    // specific conditions/variable 

      useEffect(()=>{

        async function fetchData()
        {
          const request=await axios.get(fetchUrl);

          setMovies(request.data.results)
          console.log(request)
          return request

          // "https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US"
        }

        fetchData()
        
        // if [] empty ,run once when the row loaded and dont run again
      },[fetchUrl])

      const opts={
        height:"390",
        width:"100%",
        playerVars:{
            autoplay:1
        }
      }

      const handleClick=(movie)=>{
        if(trailerUrl)
        setTrailerUrl('');
      
      else{
        movieTrailer(movie?.name||"")
        .then((url)=>{
          // https://www.youtube.com/watch?v=XtMThy8QKqU&list=PPSV
          
          const urlParams=new URLSearchParams(new URL(url).search);

          setTrailerUrl(urlParams.get("v"))
        })

        .catch((error)=>console.log(error));
      }

    


      // console.table(movies)


      }
    
  return (
    <div className='row'>
         {/* title */}
       
      <h2>{title}</h2>
           {/*container =>posters */}
      <div className='row_posters'>

        {
          movies.map(movie=>(
            <img
            key={movie.id}
            onClick={()=>handleClick(movie)}
             className={`row_poster ${isLargeRow && "row_posterLarge"}`}
             src={`${base_url}${  isLargeRow?movie.poster_path:movie.backdrop_path}`} alt={movie.name}/>
          ))
        }

       

      </div>
   

     {trailerUrl&&<Youtube videoId={trailerUrl} opts={opts}></Youtube>}

      

   



    </div>
  )
}


export default Row;