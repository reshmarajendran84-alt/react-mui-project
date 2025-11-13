import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './components/Home/Home';
import Dishes from './components/Pages/Dishes/Dishes';
import Booking from './components/Pages/Booking/Booking';
import AboutUs from './components/AboutUs/AboutUs';
import NotFound from './components/Pages/NOtFOund';
function App() {
  return (
    <Router>
      <Routes>
        {/* Layout route */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="dishes" element={<Dishes />} />
          <Route path="services" element={<Booking />} />
          <Route path="aboutus" element={<AboutUs />} />
        </Route>

        {/* 404 route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
