import { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import MovieDetail from "../compo/MovieDetail";

function Detail () {
    const {id} = useParams();
    const [movieInfo, setMovieInfo] = useState([]);
    const getMovie = async () => {  
        const json = await (
              await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
            ).json(); 
          
            setMovieInfo(json.data.movie);
            };
   
    useEffect (() => {
      getMovie();
        }, []) ;

    return (
        <div>
                    <MovieDetail
                    title={movieInfo.title}
                    rating={movieInfo.rating}
                    posterImage={movieInfo.medium_cover_image}
                    summary={movieInfo.summary}
                    genres= {movieInfo.genres}>
                    </MovieDetail>

        </div>

        
        );
    };

export default Detail;