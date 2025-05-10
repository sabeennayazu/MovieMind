import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Recommendation from './Components/Recommendation/Recommendation';
import Trending from './Components/Trending/Trending';
import './Homepage.css';


const Homepage = () => {
  return (
    <div className="homepage">
      <Navbar />

      

      <section className="section">
        <Trending />
      </section>

      <section className="section">
        <h2 className="section-title">Recommended For You</h2>
        <Recommendation />
      </section>

      <Footer />
    </div>
  );
};

export default Homepage;
