import { Routes, Route } from 'react-router-dom'
import React, { useState } from 'react';
import './App.css';
// Website
import NavigationbarComponent from './components/Navigationbar/NavigationbarComponent'
import MobileNavigationComponent from './components/Mobile_navigation/MobileNavigationComponent';
import HomeComponent from './components/Home/HomeComponent'
import AboutUsComponent from './components/About_us/AboutUsComponent'
import NewPatientsComponent from './components/New_patients/NewPatientsComponent'
import TeamComponent from './components/Team/TeamComponent'
import ServicesComponent from './components/Services/ServicesComponent'
import ContactComponent from './components/Contact/ContactComponent'



function App() {
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

  const toggleMenu = () => {
    setToggleMobileMenu(!toggleMobileMenu);
  }

  return (
    <div className="layout">
      <NavigationbarComponent toggleMenu={toggleMenu}/>
      {toggleMobileMenu && <MobileNavigationComponent toggleMenu={toggleMenu}/>}
      <Routes>
        <Route path="/" element={<HomeComponent />} />
        <Route path="/about" element={<AboutUsComponent />} />
        <Route path="/patients" element={<NewPatientsComponent />} />
        <Route path="/team" element={<TeamComponent />} />
        <Route path="/services" element={<ServicesComponent />} />
        <Route path="/contact" element={<ContactComponent />} />
      </Routes>
    </div>
  );
}

export default App;
