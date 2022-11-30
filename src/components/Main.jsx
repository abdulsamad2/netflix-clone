import axios from "axios";
import React, { useEffect, useState } from "react";
import requests from "../Request";

const Main = () => {
  const [movies, setMovies] = useState([]);
  const movie = movies[Math.floor(Math.random() * movies.length)];
  useEffect(() => {
    axios
      .get(requests.requestPopular)
      .then((response) => setMovies(response.data.results));
  }, []);
  console.log(movie);
  return (
    <div className='h-[550] w-full text-white'>
      <div className='h-full w-full'>
        <div className='absolute h-[550px] w-full bg-gradient-to-r from-black'></div>
        <img
          className='h-[550px] w-full bg-no-repeat object-cover'
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <button className='border border-gray-300 bg-gray-300 py-2 px-6 text-black'>
          Play
        </button>
        <button className='border border-gray-300 bg-gray-300 py-2 px-6 text-black'>
          Watch
        </button>
      </div>
    </div>
  );
};

export default Main;
