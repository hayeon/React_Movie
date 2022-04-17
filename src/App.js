import ProTypes from "prop-types"; //prop types를 알아내기 위함
import { useEffect, useState } from "react";
import Movie from "./compo/Movie";

function App() {
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

    console.log(movieList);

  return (
    <div>
      {loding ? ( 
      <h1>Loding</h1>) : (
      <div> 
        {movieList.map((movie) => (
         <Movie  //props를 Movie로 줌
         key={movie.id}
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

//proTypes 설정
Movie.ProTypes = {
  posterImage : ProTypes.string.isRequired,
  title : ProTypes.string.isRequired,
  summary : ProTypes.string.isRequired,
  genres : ProTypes.arrayOf(ProTypes.string).isRequired,
};


export default App;
