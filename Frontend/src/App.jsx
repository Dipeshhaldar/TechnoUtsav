import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar';
import Events from "./pages/Events";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        <Route path="/events" element={<Events />} />
      </Routes>
    </>
  );
}

export default App;
