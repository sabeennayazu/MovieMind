import React from "react";
import { Routes, Route } from "react-router-dom";
import Wishlist from "../Pages/wishlist";
import Home from "../Homepage";
import Favourites from "../Pages/Favourites";
import Login from "../auth/Login/Login";
import MovieDetail from "../Pages/MovieDetail";


const AppHandler = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Wishlist" element={<Wishlist />} />
    <Route path="/Favourites" element={<Favourites />} />
     <Route path="/Login" element={<Login />} />   
     <Route path="/MovieDetail" element={<MovieDetail />} />
    </Routes>
  );
};

export default AppHandler;
