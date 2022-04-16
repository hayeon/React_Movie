import { useEffect, useState } from "react";

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
      {loding ? <h1>loding</h1> : 
      <div> {movieList.map(movie => 
        <div key={movie.id}>
        <img src={movie.medium_cover_image} />  
        <h2> {movie.title}</h2> 
        <h3>{movie.summary}</h3>
        <ul>
            {movie.genres.map(x => <li key={x}> {x}</li> )}
        </ul>
        </div>
        )}
      </div> }
    </div>
  );

}

export default App;
