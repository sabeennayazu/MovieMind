import React, { useRef } from 'react';
import './Trending.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const movies = [
  { title: "Movie 1", image: "https://via.placeholder.com/200x300" },
  { title: "Movie 2", image: "https://via.placeholder.com/200x300" },
  { title: "Movie 3", image: "https://via.placeholder.com/200x300" },
  { title: "Movie 4", image: "https://via.placeholder.com/200x300" },
  { title: "Movie 5", image: "https://via.placeholder.com/200x300" },
  { title: "Movie 6", image: "https://via.placeholder.com/200x300" },
  { title: "Movie 7", image: "https://via.placeholder.com/200x300" },
];

const Trending = () => {
  const scrollRef = useRef(null);
  const scrollInterval = useRef(null);

  const startScroll = (direction) => {
    stopScroll();
    scrollInterval.current = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += direction === 'left' ? -20 : 20;
      }
    }, 10);
  };

  const stopScroll = () => {
    clearInterval(scrollInterval.current);
  };

  return (
    <div className="trending-wrapper">
      <h2 className="trending-title">Trending Now</h2>
      <div
        className="scroll-button left"
        onMouseEnter={() => startScroll('left')}
        onMouseLeave={stopScroll}
      >
        <FaChevronLeft />
      </div>

      <div
        className="scroll-button right"
        onMouseEnter={() => startScroll('right')}
        onMouseLeave={stopScroll}
      >
        <FaChevronRight />
      </div>

      <div className="trending-scroll" ref={scrollRef}>
        {movies.map((movie, index) => (
          <div className="movie-card" key={index}>
            <img src={movie.image} alt={movie.title} />
            <h4>{movie.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
