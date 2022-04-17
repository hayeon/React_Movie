function Movie({posterImage, title, summary, genres}) {

    return (
        <div >
        <img src={posterImage} alt = {title} />  
        <h2> {title}</h2> 
        <h3>{summary}</h3>
        <ul>
            {genres.map(x => <li key={x}> {x}</li> )}
        </ul>
        </div>
        );
}




export default Movie;