import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Events from "./pages/Events";
import HomePage from "./pages/HomePage";
import LeaderBoard from "./pages/LeaderBoard";
import Cricket from "./components/Flow/Cricket";

function App() {

  return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/leaderBoard" element={<LeaderBoard />} />



          <Route path="/event/cricket" element={<Cricket />} />
        </Routes>
      </>
  );
}

export default App;
