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
// import NewPatientsPage from './components/Pages/NewPatients/NewPatientsPage'
// import AppointmentsPage from './components/Pages/Appointments/AppointmentsPage'
import ContactPage from './components/Pages/Contact/ContactPage'

// Tools
import SocialButtonsComponent from './components/Partials/SocialButtons/SocialButtonsComponent'

function App() {
    const [
        isVisibleMobileMenu,
        setMobileMenuVisibility,
    ] = useState(false);
    
    const [
        activeItem = 'Inicio',
        setActiveItem
    ] = useState('Inicio');
    
    const toggleMenu = () => {
        setMobileMenuVisibility(!isVisibleMobileMenu);
    }

    const changeActiveItem = (index) => {
        setActiveItem(index);
    }

    return (
        <div className="layout">
            <NavigationBarComponent toggleMenu={toggleMenu} />
            {isVisibleMobileMenu && 
                <MobileNavigationComponent 
                    activeItem={activeItem} 
                    changeActiveItem={changeActiveItem}
                    toggleMenu={toggleMenu}
                />
            }
            <Routes>
                <Route path="/" element={<HomePage changeActiveItem={changeActiveItem} />} />
                <Route path="/about" element={<AboutPage changeActiveItem={changeActiveItem} />} />
                <Route path="/services" element={<ServicesPage changeActiveItem={changeActiveItem} />} />
                {/* <Route path="/patients" element={<NewPatientsPage />} />
                <Route path="/team" element={<AppointmentsPage />} /> */}
                <Route path="/contact" element={<ContactPage />} />
            </Routes>
            <SocialButtonsComponent />
        </div>
    );
}

export default App;
