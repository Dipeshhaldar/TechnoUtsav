import React from "react";
import "./Footer.css"; // Import your CSS file for styling

const Footer = () => {
  return (
    <>
      <footer className="footer">
      <h2 id="footer__heading">Technotsav 2024</h2>
        <div className="footer-section">
          <div className="footer-left">
            <p className="footer-description">
              Technotsav, SBJITMR's annual fest, all run by students ,seamlessly
              merges tech, culture, and sheer enjoyment. Dive into technical and
              non technical competitions, experiencing an innovative and dynamic
              atmosphere. Whether tech-savvy or culturally inclined, Technotsav
              caters to all, offering a perfect mix of learning and excitement.
            </p>
          </div>

          <div className="footer-right">
            <div>Home</div>
            <div>Events</div>
            <div>Leaderboard</div>
            <div>About</div>
          </div>
        </div>

        <hr className="footer-line" />

        <div className="footer-social">
          {/* Add your social media logos here */}
          <img src="/HomePage/facebook.png" alt="Facebook Logo" />
          <img src="/HomePage/youtube.png" alt="Twitter Logo" />
          <img src="/HomePage/linkedin.png" alt="Twitter Logo" />
          <img src="/HomePage/instagram.png" alt="Twitter Logo" />
        </div>

        <div className="footer-bottom">
        </div>
      </footer>
        <div>
          <p className="made-with-love">
            Made with ❤️ by GDSC SBJITMR
          </p>
        </div>
    </>
  );
};

export default Footer;
