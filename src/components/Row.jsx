import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'

const Row = ({ title, fetchURL,rowID }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get(fetchURL).then((response) => setMovies(response.data.results));
  }, [fetchURL]);
  const slideLeft=()=>{
    const slider = document.getElementById('slider' + rowID)
     slider.scrollLeft = slider.scrollLeft -500
  }
  const slideRight=()=>{
    const slider = document.getElementById('slider' +rowID)
     slider.scrollLeft = slider.scrollLeft + 500
  }
  return (
    <>
      <h2 className='p-4 font-bold text-white md:text-xl'>{title}</h2>
      <div className='relative flex  items-center group'>
        <MdChevronRight onClick={slideRight} size={40} className='bg-white absolute opacity-70 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block right-0 rounded-full' />
        <div className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative" id={"slider"+ rowID}>
          {movies.map((item, id, ) => (
        <Movie key={id} item={item}/>
          ))}
        </div>
        <MdChevronLeft onClick={slideLeft} size={40} className='bg-white absolute opacity-70 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block left-0 rounded-full'/>

      </div>
    </>
  );
};

export default Row;
