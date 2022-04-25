import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({posterImage, title, summary, genres}) {

    return (
        <div >
        <img src={posterImage} alt = {title} />  
      <h2>
        <Link to="/movie">{title}</Link>
      </h2>
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
    posterImage: PropTypes.string.isRequired,
    title: PropTypes.string,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  };

export default Movie;