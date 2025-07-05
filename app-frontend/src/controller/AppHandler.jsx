import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Homepage";
import Favourites from "../Pages/Favourites";
import MovieDetail from "../Pages/MovieDetail";
import Wishlist from "../Pages/wishlist";
import Login from "../auth/Login/Login";

const AppHandler = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/Wishlist" element={<Wishlist />} />
			<Route path="/Favourites" element={<Favourites />} />
			<Route path="/Login" element={<Login />} />
			<Route path="/movie-detail" element={<MovieDetail />} />
		</Routes>
	);
};

export default AppHandler;
