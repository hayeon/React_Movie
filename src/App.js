import { useEffect, useState } from "react";

function App() {
  const [loding, setLoding] = useState(true);
  const [movieList, setMoiveList] = useState([]);
    useEffect ( () => {
    fetch ("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year")
    .then( (response) => response.json())
    .then((json) => setMoiveList(json.data.movies));
    setLoding(false);
    
  }, [] );

  console.log(movieList);

  return (
    <div>
      {loding ? <h1>loding</h1> : <h1>api~</h1> }
    </div>
  );
}

export default App;
