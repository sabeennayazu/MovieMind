import React from "react";
import "./MovieDetail.css";
import Navbar from "../Components/Navbar/Navbar";
import { FaHeart, FaBookmark, FaShareAlt } from "react-icons/fa";

const MovieDetail = () => {
  return (
    <div className="movie-detail-wrapper">
      <Navbar />

      {/* Main Content */}
      <div className="movie-main-section">
        <div className="left-section">
          <div className="trailer-player">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Movie Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>

          <div className="=">
            {/* Movie Title */}
          <h2 className="movie-title">Inception</h2>

          {/* Action Icons */}
          <div className="movie-actions">
            <button className="movie-icon-btn" title="Favorite">
              <FaHeart />
            </button>
            <button className="movie-icon-btn" title="Wishlist">
              <FaBookmark />
            </button>
            <button className="movie-icon-btn" title="Share">
              <FaShareAlt />
            </button>
          </div>
          </div>
        </div>

        <div className="recommendation-sidebar">
          <h2 className="rec-title">Recommended</h2>
          <p>Suggestions will appear here later.</p>
        </div>
      </div>

      {/* Movie Info Section */}
      <div className="movie-info-container">
        <div className="rating-stars">
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star} className="star">
              ★
            </span>
          ))}
        </div>

        <div className="comment-section">
          <input
            type="text"
            className="comment-input"
            placeholder="Add a comment..."
          />
          <div className="comment-display">
            <p>
              <strong>User123:</strong> Amazing movie! Must watch.
            </p>
            <button className="see-more-btn">See more comments</button>
          </div>
        </div>

        <div className="movie-description">
          <h3>Description</h3>
          <p>
            A skilled thief, the absolute best in the dangerous art of
            extraction, stealing valuable secrets from deep within the
            subconscious during the dream state, is given a chance at
            redemption...
          </p>
          <ul>
            <li>
              <strong>Director:</strong> Christopher Nolan
            </li>
            <li>
              <strong>Cast:</strong> Leonardo DiCaprio, Joseph Gordon-Levitt,
              Ellen Page
            </li>
            <li>
              <strong>Genre:</strong> Sci-Fi, Thriller
            </li>
            <li>
              <strong>Release Year:</strong> 2010
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
