import React, { useState } from "react";
import "./MovieDetail.css";
import { FaBookmark, FaHeart, FaShareAlt } from "react-icons/fa";
import Navbar from "../Components/Navbar/Navbar";

const MovieDetail = () => {
	const [showMore, setShowMore] = useState(false);

	const fullDescription = `A skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, is given a chance at redemption which involves executing his toughest job till date – Inception. But things quickly spiral out of control as multiple dream levels start to collapse. More details about the complex architecture of dreams and characters reveal how delicate and dangerous the process is.`;

	const director = "Christopher Nolan";
	const cast = "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page";
	const genre = "Sci-Fi, Thriller";
	const releaseYear = "2010";

	const shortDescription = fullDescription.slice(0, 150) + "...";

	return (
		<div className="movie-detail-wrapper">
			<Navbar />

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

					<div className="trailer-heading">
						<h2 className="movie-title">Inception</h2>
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

					<div className="movie-details">
						<div className="poster-container">
							<img
								className="movie-poster"
								src="https://rukminim2.flixcart.com/image/850/1000/l27wtjk0/poster/x/y/i/medium-inception-movie-hd-matte-finish-poster-butcutnw9954-original-imagdhw4azeedhbz.jpeg?q=90&crop=false"
								alt="poster"
							/>
						</div>

						<div className="movie-description">
							<h3>Description</h3>
							<p>
								{showMore ? fullDescription : shortDescription}
								<span
									className="toggle-description"
									onClick={() => setShowMore((prev) => !prev)}
								>
									{showMore ? "Show less" : "Show more"}
								</span>
							</p>

							{/* Identity section is always visible */}
							<div className="identity-info" style={{ marginTop: "12px" }}>
								<p>
									<strong>Director:</strong> {director}
								</p>
								<p>
									<strong>Cast:</strong> {cast}
								</p>
								<p>
									<strong>Genre:</strong> {genre}
								</p>
								<p>
									<strong>Release Year:</strong> {releaseYear}
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="recommendation-sidebar">
					<h2 className="rec-title">Recommended</h2>
					<p>Suggestions will appear here later.</p>
				</div>
			</div>

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
			</div>
		</div>
	);
};

export default MovieDetail;
