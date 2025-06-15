import React from 'react';
import './SideRecommendation.css';

const SideRecommendation = () => {
    return (
        <div className="side-recommendation">
            <h2 className="recommendation-title">Recommended for You</h2>
            <ul className="recommendation-list">
                <li className="recommendation-item">
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Movie Poster"
                        className="recommendation-poster"
                    />
                    <div className="recommendation-info">
                        <h3 className="recommendation-name">Movie Title</h3>
                        <p className="recommendation-genre">Genre</p>
                    </div>
                </li>
                <li className="recommendation-item">
                    <img
                        src="https://via.placeholder.com/150"
                        alt="Movie Poster"
                        className="recommendation-poster"
                    />
                    <div className="recommendation-info">
                        <h3 className="recommendation-name">Movie Title</h3>
                        <p className="recommendation-genre">Genre</p>
                    </div>
                </li>
                {/* Add more items as needed */}
            </ul>
        </div>
    );
 }

export default SideRecommendation;