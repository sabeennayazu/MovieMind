import React from "react";
import "./MovieDetail.css";
import Navbar from "../Components/Navbar/Navbar";

const MovieDetail = () => {
  return (
    <div className="movie-detail-wrapper">
     <Navbar />

      {/* Main Content */}
      <div className="movie-main-section">
        <div className="trailer-player">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Movie Trailer"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="recommendation-sidebar">
          <h2 className="rec-title">Recommended</h2>
          <p>Suggestions will appear here later.</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
