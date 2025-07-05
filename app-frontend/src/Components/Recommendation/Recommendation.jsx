import React, { useRef } from "react";
import "./Recommendation.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const movies = [
	{
		id: 1,
		title: "Inception",
		year: 2010,
		poster:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRChhtRNF6QL3R1AYyh4lb__M5DjOvHIJ5rlg&s",
	},
	{
		id: 2,
		title: "Interstellar",
		year: 2014,
		poster: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SY679_.jpg",
	},
	{
		id: 3,
		title: "The Dark Knight",
		year: 2008,
		poster:
			"https://imageio.forbes.com/specials-images/imageserve/61116cea2313e8bae55a536a/-Dune-/0x0.jpg?format=jpg&width=1440",
	},
	{
		id: 4,
		title: "The Matrix",
		year: 1999,
		poster: "https://m.media-amazon.com/images/I/51vpnbwFHrL._AC_SY679_.jpg",
	},
	{
		id: 5,
		title: "Dune",
		year: 2021,
		poster: "https://m.media-amazon.com/images/I/81+z7XnFAbL._AC_SY679_.jpg",
	},
	{
		id: 6,
		title: "Avatar",
		year: 2009,
		poster: "https://m.media-amazon.com/images/I/61OUGpUfAyL._AC_SY679_.jpg",
	},
];

const Recommendation = () => {
	const scrollRef = useRef(null);
	const scrollInterval = useRef(null);

	const startScroll = (direction) => {
		stopScroll();
		scrollInterval.current = setInterval(() => {
			scrollRef.current.scrollLeft += direction === "left" ? -20 : 20;
		}, 10);
	};

	const stopScroll = () => {
		clearInterval(scrollInterval.current);
	};

	return (
		<div className="recommendation-wrapper">
			<h2 className="recommendation-title">Recommended for You</h2>

			<div
				className="scroll-button left"
				onMouseEnter={() => startScroll("left")}
				onMouseLeave={stopScroll}
			>
				<FaChevronLeft />
			</div>

			<div
				className="scroll-button right"
				onMouseEnter={() => startScroll("right")}
				onMouseLeave={stopScroll}
			>
				<FaChevronRight />
			</div>

			<div className="recommendation-scroll" ref={scrollRef}>
				{movies.map((movie) => (
					<div className="movie-card" key={movie.id}>
						<img src={movie.poster} alt={movie.title} />
						<div className="movie-info">
							<h4>{movie.title}</h4>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Recommendation;
