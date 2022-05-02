import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({id, posterImage, title, summary, genres}) {

    return (
        <div >
        <img src={posterImage} alt = {title} />  
      <h2> 
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      
      <h3>
        <Link to="/mypage">내 페이지</Link>
      </h3>

        <h3>{summary}</h3>
        <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
        </ul>
        </div>
        );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    posterImage: PropTypes.string.isRequired,
    title: PropTypes.string,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  };
  
export default Movie;