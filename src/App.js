import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import HomePage from './Pages/homePage/HomePage';
import Footer from './Components/Footer/Footer';
import About_Us from './Pages/homePage/About Us/About Us';
import Services from './Pages/homePage/About Us/Services/Services';
import Portfolio from './Pages/Portfolio/Portfolio';
import ContactUs from './Pages/ContactUs/ContactUs';
import PrivacyPage from './Pages/PrivacyPage/PrivacyPage';
import Portfolio2 from './Pages/Portfolio/Portfolio2';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about_us" element={<About_Us />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio2" element={<Portfolio2 />} />
          <Route path="/contact" element={<ContactUs/>} />
          <Route path="/privacy" element={<PrivacyPage/>} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
