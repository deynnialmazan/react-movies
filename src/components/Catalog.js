import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useNavigate } from "react-router-dom";
import axios from 'axios';


function Catalog() {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(null);

    useEffect (() => {
        const fetchMovies = async () => {
            try {
            const movies = await axios.get('https://api.andrespecht.dev/movies');
            const moviesArray  = movies.data.response;
            //console.log(moviesArray);
            setMovies(moviesArray);

            } catch (error) {
            console.error(error);
            }
        };

      fetchMovies();
      
    }, []);


    const sortMoviesByTitle = () => {
        const sortedMovies = [...movies].sort((a, b) => {
          return a.title.localeCompare(b.title);
        });
        setMovies(sortedMovies); //displaying new array of sorted movies
    };

     const handleMovieClick = (movie) => {
        setSelectedMovie(movie);
    };
    
      useEffect(() => {
        // grab information of the selected movie and update selectedMovie array
        const handleMovieClick = (movie) => {
            setSelectedMovie(movie);
        };
      }, [selectedMovie]);

      
  return (
    <div className='container'>
        <Helmet>
            <title>React Movies</title>
        </Helmet>
        <div className='sort-div'>
            <input type="button" className='sortBtn' value="Sort movies" onClick={sortMoviesByTitle}/>
        </div>
        <section className='catalog' id='catalog'>
            {movies.map(movie => (
                 <div key={movie._id} className="movie-item" onClick={() => handleMovieClick(movie)}>
                    <Link to={{pathname: `/movie/${movie.slug}` }}>
                        <figure>
                            <img src={movie.poster} alt={movie.title} />
                        </figure>
                        <div className='movie-title'>
                            <p>{movie.title}</p>
                            <p>{movie.year}</p>
                        </div>
                    </Link>
                 </div>
            ))};
        </section>      
   </div>
  )
}

export default Catalog;