import React, { useRef } from "react";
import "./Trending.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const movies = [
	{
		title: "The Creator",
		image:
			"https://cdn11.bigcommerce.com/s-ydriczk/images/stencil/1500x1500/products/90301/98769/the-creator-original-movie-poster-one-sheet-final-style-buy-now-at-starstills__81077.1697644483.jpg?c=2",
	},
	{
		title: "Avengers",
		image:
			"https://www.vintagemovieposters.co.uk/wp-content/uploads/2023/03/IMG_1887-scaled.jpeg",
	},
	{
		title: "Walk Alone",
		image:
			"https://marketplace.canva.com/EAFTl0ixW_k/1/0/1131w/canva-black-white-minimal-alone-movie-poster-YZ-0GJ13Nc8.jpg",
	},
	{
		title: "John Wick 2",
		image:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVYgeugdzWSaRq9q_fkMFLSnBM36Gecoiarw&s",
	},
	{
		title: "Bahubali",
		image:
			"https://c7.alamy.com/comp/J30B3J/baahubali-the-beginning-aka-bahubali-the-beginning-poster-from-left-J30B3J.jpg",
	},
	{
		title: "Bahubali 2",
		image:
			"https://i.pinimg.com/736x/40/aa/4e/40aa4e597b0fb5c7d00bb54b1b2a0362.jpg",
	},
	{ title: "Movie 7", image: "https://via.placeholder.com/200x300" },
];

const Trending = () => {
	const scrollRef = useRef(null);
	const scrollInterval = useRef(null);

	const startScroll = (direction) => {
		stopScroll();
		scrollInterval.current = setInterval(() => {
			if (scrollRef.current) {
				scrollRef.current.scrollLeft += direction === "left" ? -20 : 20;
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
