import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './MobileNavigation.module.css'
import home from '../../../assets/images/home-white.png'
import about from '../../../assets/images/about-white.png'
import patients from '../../../assets/images/patients-white.png'
import team from '../../../assets/images/team-white.png'
import services from '../../../assets/images/services-white.png'
import contact from '../../../assets/images/contact-white.png'

class MobileNavigationComponent extends Component {

    changeSelection = (index) => {
        this.props.changeActiveItem(index);
    }

    render() {
        return (
            <div className={styles.MobileMenuModal}>
                <h1 className={styles.title}>Menu</h1>
                <ul className={styles.mobileMenu}>
                    {menuItems.map((item, index) => (
                        <Link to={item.path}><li
                            key={index}
                            onClick={() => {
                                this.changeSelection(item.label);
                                this.props.toggleMenu();
                            }}
                            className={item.label === this.props.activeItem ? styles.selected : ''}
                        >
                            <img src={item.icon} alt={item.label} />
                            <span>{item.label}</span>
                        </li></Link>
                    ))}
                </ul>
            </div>
        );
    }
}

const menuItems = [
    { icon: home, path: '/', label: 'Home' },
    { icon: services, path: '/services', label: 'Services' },
    { icon: about, path: '/about', label: 'About us' },
    // { icon: patients, path: '/patients', label: 'Nuevos pacientes' },
    // { icon: team, path: '/team', label: 'Equipo' },
    { icon: contact, path: '/contact', label: 'Contact' }
];
export default MobileNavigationComponent;
