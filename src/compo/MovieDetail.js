import React from "react";
import PropTypes from "prop-types";

function MovieDetail ( {title, rating, posterImage ,summary, genres}) {

return (
    <div>
    <img src={posterImage} alt = {title} />
    <h1>{title} </h1>
    <h3>{rating}</h3>
    <h3>{summary}</h3>
    {/* <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
        </ul> */}

      </div>
      
   
    ); 
};

// MovieDetail.propTypes = {
//     title: PropTypes.string.isRequired,
//     posterImage: PropTypes.string.isRequired,
//     summary: PropTypes.string.isRequired,
//   };

export default MovieDetail;