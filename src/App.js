import { Routes, Route } from 'react-router-dom'
import React, { useState } from 'react';
import './App.css';

// Navigation
import MobileNavigationComponent from './components/Navigation/MobileNavigation/MobileNavigationComponent'
import NavigationBarComponent from './components/Navigation/NavigationBar/NavigationBarComponent'

// Pages
import HomePage from './components/Pages/Home/HomePage'
import AboutPage from './components/Pages/About/AboutPage'
import ServicesPage from './components/Pages/Services/ServicesPage'
import NewPatientsPage from './components/Pages/NewPatients/NewPatientsPage'
import AppointmentsPage from './components/Pages/Appointments/AppointmentsPage'
import ContactPage from './components/Pages/Contact/ContactPage'

function App() {
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

  const toggleMenu = () => {
    setToggleMobileMenu(!toggleMobileMenu);
  }

  return (
    <div className="layout">
      <NavigationBarComponent toggleMenu={toggleMenu}/>
      {toggleMobileMenu && <MobileNavigationComponent toggleMenu={toggleMenu}/>}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/patients" element={<NewPatientsPage />} />
        <Route path="/team" element={<AppointmentsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
}

export default App;
