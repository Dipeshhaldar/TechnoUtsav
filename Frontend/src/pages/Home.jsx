import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="background-image">
        <img src="/HomePage/Chill Out Wallpaper.png" alt="Background" />
        <div className="centered-text">
          <h1>TECHNOUTSAV</h1><br />
          <h1 className='Year-2024'>2024</h1>
          <br />
          <h2 className='technoutsav__date'>25 - 27 JANUARY</h2>
          <p>
            <img src="/HomePage/Down Button.png" alt="Small Image" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
