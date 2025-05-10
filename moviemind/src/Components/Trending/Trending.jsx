import React from 'react';
import './Trending.css';

const trendingMovies = [
  {
    id: 1,
    title: 'Dune: Part Two',
    year: 2024,
    poster: 'https://m.media-amazon.com/images/I/81V+ZkEeG4L._AC_SY679_.jpg',
  },
  {
    id: 1,
    title: 'Dune: Part Two',
    year: 2024,
    poster: 'https://m.media-amazon.com/images/I/81V+ZkEeG4L._AC_SY679_.jpg',
  },
  {
    id: 2,
    title: 'Oppenheimer',
    year: 2023,
    poster: 'https://m.media-amazon.com/images/I/71dVJeSVO-L._AC_SY679_.jpg',
  },
  {
    id: 3,
    title: 'Spider-Man: No Way Home',
    year: 2021,
    poster: 'https://m.media-amazon.com/images/I/81c+9BOQNWL._AC_SY679_.jpg',
  },
  {
    id: 4,
    title: 'The Batman',
    year: 2022,
    poster: 'https://m.media-amazon.com/images/I/71pJpjBfqBL._AC_SY679_.jpg',
  },

];

const Trending = () => {
  return (
    <div className="trending">
      <h2>🔥 Trending Now</h2>
      <div className="trending-container">
        {trendingMovies.map((movie) => (
          <div className="trending-card" key={movie.id}>
            <img src={movie.poster} alt={movie.title} className="trending-poster" />
            <div className="trending-info">
              <h3>{movie.title}</h3>
              <p>{movie.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
