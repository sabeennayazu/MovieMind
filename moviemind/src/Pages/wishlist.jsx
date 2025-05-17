import React from "react";
import Footer from "../Components/Footer/Footer"; // Adjust path as needed
import Navbar from "../Components/Navbar/Navbar"; // Adjust path as needed
import "./Wishlist.css"; // Optional: CSS specific to wishlist

const Wishlist = () => {
	// Sample movies - replace with dynamic data later if needed
	const wishlistMovies = [
		{
			id: 1,
			title: "Inception",
			image: "https://via.placeholder.com/200x300?text=Inception",
		},
		{
			id: 2,
			title: "Interstellar",
			image: "https://via.placeholder.com/200x300?text=Interstellar",
		},
		{
			id: 3,
			title: "The Dark Knight",
			image: "https://via.placeholder.com/200x300?text=Dark+Knight",
		},
	];

	return (
		<>
			<Navbar />

			<div className="wishlist-container">
				<h2 className="wishlist-title">My Wishlist</h2>

				<div className="wishlist-grid">
					{wishlistMovies.map((movie) => (
						<div className="wishlist-card" key={movie.id}>
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

export default Wishlist;
