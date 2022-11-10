import React from "react";
import image from '../assets/store_9.jpg'
import Products from "./Products";

const Home = () => {
  return (
    <div className="hero">
      <div className="card text-bg-dark text-black border-0">
        <img src={image} className="card-img" alt="background" height="550px" />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-4 fw-bolder mb-0">WINTER SEASON ARRIVALS</h5>
            <p className="card-text lead fs-2">
              CHECK OUT ALL THE TRENDS
            </p>
            
          </div>
        </div>
      </div>
      <Products/>
    </div>
  );
};

export default Home;
