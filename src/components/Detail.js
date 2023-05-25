import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';


function Detail() {
  const { selectedMovie } = useParams();
  const [movie, setMovie] = useState([]);
  const [genres, setGenres] = useState([]);

 useEffect (() => {
    const fetchMovie = async () => {
        try {
        const movieArray = await axios.get(`https://api.andrespecht.dev/movie/${selectedMovie}`);
        const movieInfo  = movieArray.data.response;
        let genres = movieInfo.genre;
        console.log(genres);
        setGenres(genres);
        setMovie(movieInfo);

        } catch (error) {
        console.error(error);
        }
    };

  fetchMovie();  
}, []);


  return (
    <section className='movie-detail'>
      <Helmet>
          <title>{movie.title}</title>
      </Helmet>
      <div className='container'>
        <div className='main-div'>
          <div className="column-1">
            <figure className='poster-detail'>
              <img src={movie.poster} alt={movie.title} />
            </figure>
          </div>
          <div className="column-2">
            <h1>{movie.title}</h1>
            <div className='line01'>
              <p>{movie.year}</p>
              <span>|</span>
              <p>{movie.runningTime}</p>
            </div>
            <p className='description'>{movie.description}</p>
            <div className='genres-list'>
                {genres.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
            </div>
            <input type="button" value="Watch now" className='watch-now'/>
          </div>
        </div>
      </div>
    </section>
        
  )
}

export default Detail;