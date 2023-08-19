import React, { useEffect, useState } from 'react'
import requests from '../request';
import axios from '../axios';

import './Banner.css'

function Banner() {

    const[movie,setMovie]=useState([]);

    useEffect(()=>{
        async function fetchData(){
            const request=await axios.get(requests.fetchNetflixOriginals)

            setMovie(
                request.data.results[
                    Math.floor(Math.random()*request.data.results.length)
                ]
            )

            return request;
        } 
        
        fetchData();

    },[]);
    console.log(movie)

    function truncate(str,n){
        return str?.length>n? str.substr(0,n-1)+"...":str;
    }

  return (

    // <header className="banner"
    //     style={{
    //         backgroundSize:"cover",
    //         backgroundImage:`url (
    //             "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"

    //         )`,
    //         backgroundPosition:"center center",
    //     }}
    //     >

    <header
  className="banner"
  style={{
    backgroundSize: "cover",
    backgroundImage: movie?.backdrop_path
      ? `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`
      : null, // You can provide a fallback background image here
    backgroundPosition: "center center",
  }}
>

        <div className='banner_contents'>
            {/* title */}
            <h1 className='banner_title'>
                {
                    movie?.title||movie?.name||movie?.original_name
                }
            </h1>

            <div className="banner_buttons">
                <button className='banner_button' >
                    Play
                </button>
                <button className='banner_button'>
                    MyList
                </button>
                    
            </div>

            <h1 className="banner_description">
                {truncate(movie?.overview,150)}
            </h1>


            {/* 2 buttons */}
            {/* description */}
        </div>
        <div className="banner--fadeBottom">
            
        </div>
    </header>

    
  )
}

export default Banner