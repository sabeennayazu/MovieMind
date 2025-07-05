import React from "react";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import "./Favourites.css"; // Create this for styling

const Favourites = () => {
	// You can mock your favourite movies here
	const favouriteMovies = [
		{ id: 1, title: "The Dark Knight", image: "/images/dark-knight.jpg" },
		{ id: 2, title: "Inception", image: "/images/inception.jpg" },
		{ id: 3, title: "Interstellar", image: "/images/interstellar.jpg" },
	];

	return (
		<>
			<Navbar />
			<div className="favourites-wrapper">
				<h2 className="favourites-title">Your Favourites</h2>
				<div className="favourites-movie-list">
					{favouriteMovies.map((movie) => (
						<div key={movie.id} className="favourite-card">
							<img src={movie.image} alt={movie.title} />
							<h4>{movie.title}</h4>
						</div>
					))}
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Favourites;
