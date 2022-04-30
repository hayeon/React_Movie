//로딩/ 영화 리스트 전체를 보여주는 컴포넌트
import { useEffect, useState } from "react";
import Movie from "../compo/Movie";

function Home () {
    const [loding, setLoding] = useState(true);
    const [movieList, setMoiveList] = useState([]);
    const getMovieList = async () => {
      const json = await ( 
        await fetch(`https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year`)
        ).json();
        
        setMoiveList(json.data.movies);
        setLoding(false);
      };     
  
        useEffect ( () => {
        getMovieList();
         }, [] );

  
    return (
      <div>
        {loding ? ( 
        <h1>Loding</h1>) : (
        <div> 
          {movieList.map((movie) => (
           <Movie  //props를 Movie로 줌
           key={movie.id}
           id={movie.id}
           posterImage={movie.medium_cover_image}
           title= {movie.title}
           summary= {movie.summary} 
           genres = {movie.genres} /> 
           ))}
        </div> 
        )}
      </div>
    );
  
  }
  

export default Home;