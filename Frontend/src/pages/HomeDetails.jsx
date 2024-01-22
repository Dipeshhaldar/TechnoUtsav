import "./HomeDetails.css";

export default function HomeDetails() {
    return(
        <>
        <div id="home-details" className="container">
      {/* Upper Section */}
      <div className="upper-section">
        <div className="image-container">
          {/* Image for the upper-left section */}
          <img src="/HomePage/event image.png" alt="Event Image" />
        </div>
        <div className="text-container">
          {/* Heading for the upper section */}
          <h2 className="homedetails__heading">EVENTS</h2>
          {/* Text content for the upper-right section */}
          <div className="vertical-line">
          <p className="Homedetails-event__description">Experience the magic of our annual fest, a celebration of talent and diversity! Engage in a dynamic fusion of cultural, technical, and non-technical events, providing a stage for all to shine. Unleash your skills and passion at this gathering of creativity and innovation.</p></div>
          <button className="explore-button">Explore More</button>
        </div>
      </div>

      {/* Lower Section */}
      <div className="lower-section">
        <div className="text-container">
          {/* Heading for the lower section */}
          <h2 className="homedetails__heading">VARCHASVA</h2>
          {/* Text content for the lower-left section */}
          <div className="vertical-line">
          <p className="Homedetails-varchasva__description">Get ready for pulse-pounding action in our fest's Sports Section! From fierce showdowns to team camaraderie, immerse yourself in the excitement of athleticism. Whether you're a player or a cheering fan, join us for unforgettable moments and celebrate the true spirit of sportsmanship!</p></div>
          <button className="explore-button">Explore More</button>
        </div>
        <div className="image-container">
          {/* Image for the lower-right section */}
          <img src="/HomePage/workshop image.png" alt="Varchasva Image" />
        </div>
      </div>
    </div>
        </>
    );
}