import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './MobileNavigation.module.css'
import home from '../../assets/images/home-white.png'
import about from '../../assets/images/about-white.png'
import patients from '../../assets/images/patients-white.png'
import team from '../../assets/images/team-white.png'
import services from '../../assets/images/services-white.png'
import contact from '../../assets/images/contact-white.png'

class MobileNavigationComponent extends Component {

  state = {
    activeItem: 0
  }

  selectOption = (index) => {
    this.setState({
      activeItem: index
    });
  }
  
  render() {
    const { activeItem } = this.state

    return (
      <div className={styles.MobileMenuModal}>
        <h1 className={styles.title}>Menu</h1>
        <ul className={styles.mobileMenu}>
          {menuItems.map((item, index) => (
            <li
              key={index}
              onClick={() => {
                this.selectOption(index);
                this.props.toggleMenu();
              }}
              className={index === activeItem ? styles.selected : ''}
            >
              <img src={item.icon} alt={item.label} />
              <Link to={item.path}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const menuItems = [
  { icon: home, path: '/', label: 'Inicio' },
  { icon: about, path: '/about', label: 'Acerca de' },
  { icon: patients, path: '/patients', label: 'Nuevos pacientes' },
  { icon: team, path: '/team', label: 'Equipo' },
  { icon: services, path: '/services', label: 'Servicios' },
  { icon: contact, path: '/contact', label: 'Contacto' }
];
export default MobileNavigationComponent;
