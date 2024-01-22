import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Events from "./pages/Events";
<<<<<<< HEAD
import HomePage from "./pages/HomePage";
=======
import LeaderBoard from "./pages/LeaderBoard";
import Cricket from "./components/Flow/Cricket";
>>>>>>> 22346dbc7a6fd6931c8860f46abf8c232a753677

function App() {

  return (
<<<<<<< HEAD
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        <Route path="/events" element={<Events />} />
      </Routes>
    </>
=======
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/leaderBoard" element={<LeaderBoard />} />



          <Route path="/event/cricket" element={<Cricket />} />
        </Routes>
      </>
>>>>>>> 22346dbc7a6fd6931c8860f46abf8c232a753677
  );
}

export default App;
