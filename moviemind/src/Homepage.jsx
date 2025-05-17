import React from "react";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Recommendation from "./Components/Recommendation/Recommendation";
import Trending from "./Components/Trending/Trending";
import "./Homepage.css";

const Homepage = () => {
	return (
		<div className="homepage">
			<Navbar />

			<section className="section">
				<Trending />
			</section>

			<section className="section">
				<Recommendation />
			</section>

			<Footer />
		</div>
	);
};

export default Homepage;
