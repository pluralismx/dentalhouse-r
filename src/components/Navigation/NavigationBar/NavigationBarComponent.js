import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './NavigationBar.module.css'
import Logo from '../../../assets/images/logo.png'
import Menu from '../../../assets/images/menu-white.png'

class NavigationBarComponent extends Component {

    render() {
        return(
            <nav className={styles.Nav}>
                {/* Mobile */}
                <div className={styles.MobileNavigationbar}>
                    <div>
                        <a href="http://www.dentalhouse.mx.nf">
                            <img src={Logo} className={styles.MobileNavigationbarLogo} />
                        </a>
                    </div>
                    <div className={styles.MenuIconContainer}>
                        <img src={Menu} className={styles.MobileNavigationbarMenu} onClick={this.props.toggleMenu}/>
                    </div>
                </div>

                {/* Desktop */}
                <div className={styles.DesktopNavigationbar}>
                    <ul className={styles.DesktopNavigationBranding}>
                        <img src={Logo} className={styles.DesktopNavigationbarLogo} />
                    </ul>
                    <ul className={styles.DesktopNavigationMenu}>
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/services"><li>Services</li></Link>
                        <Link to="/about"><li>About us</li></Link>
                        {/* <Link to="/patients"><li>Nuevos pacientes</li></Link>
                        <Link to="/appointments"><li>Equipo</li></Link> */}
                        <Link to="/contact"><li>Contact</li></Link>
                    </ul>
                </div>
            </nav>
        );
    }

}
export default NavigationBarComponent;