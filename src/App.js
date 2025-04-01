import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import OurRooms from "./pages/OurRooms";
import AboutUs from "./pages/AboutUs";
import Gallery from "./pages/Gallery";
import BookNow from "./pages/BookNow";
import Navbar from "./components/Navbar";
import ScrollButton from "./components/ScrollButton/ScrollToTop";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-rooms" element={<OurRooms />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/book-now" element={<BookNow />} />
      </Routes>
      <ScrollButton /> 
    </Router>
  );
}

export default App;