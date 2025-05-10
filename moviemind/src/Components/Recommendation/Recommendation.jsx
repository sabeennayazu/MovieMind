import React from 'react';
import './Recommendation.css';

const movies = [
  {
    id: 1,
    title: 'Inception',
    year: 2010,
    poster: 'https://m.media-amazon.com/images/I/51s+qzN2rHL._AC_SY679_.jpg',
  },
  {
    id: 2,
    title: 'Interstellar',
    year: 2014,
    poster: 'https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SY679_.jpg',
  },
  {
    id: 3,
    title: 'The Dark Knight',
    year: 2008,
    poster: 'https://m.media-amazon.com/images/I/71pox3r7bOL._AC_SY679_.jpg',
  },
  {
    id: 4,
    title: 'The Matrix',
    year: 1999,
    poster: 'https://m.media-amazon.com/images/I/51vpnbwFHrL._AC_SY679_.jpg',
  },
   {
    id: 1,
    title: 'Inception',
    year: 2010,
    poster: 'https://m.media-amazon.com/images/I/51s+qzN2rHL._AC_SY679_.jpg',
  },
  {
    id: 2,
    title: 'Interstellar',
    year: 2014,
    poster: 'https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SY679_.jpg',
  },

];

const Recommendation = () => {
  return (
    <div className="recommendation">
      <div className="movie-grid">
        {movies.map((movie) => (
          <div className="movie-card" key={movie.id}>
            <img src={movie.poster} alt={movie.title} className="movie-poster" />
            <div className="movie-info">
              <h3>{movie.title}</h3>
              <p>{movie.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommendation;
