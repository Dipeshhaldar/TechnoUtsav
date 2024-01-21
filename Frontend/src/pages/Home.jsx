// Home.js
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="background-image">
        {/* You can replace 'your-image.jpg' with the actual image file */}
        <img src="/HomePage/Chill Out Wallpaper.png" alt="Background" />
        <div className="centered-text">
          <h1>TECHNOUTSAV</h1>
          <h1>2024</h1>
          <p>
            <img src="/HomePage/Down Button.png" alt="Small Image" height="20" width="20" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
