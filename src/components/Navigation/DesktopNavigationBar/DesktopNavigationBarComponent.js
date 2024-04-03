import React, { Component } from 'react'
import styles from './DesktopNavigationBar.module.css'
import Logo from '../../../assets/images/logo.png'
import Menu from '../../../assets/images/menu-white.png'

class DesktopNavigationBarComponent extends Component {

    render() {
        return(
            <nav>
                {/* Mobile */}
                <div className={styles.mobileNavigationbar}>
                    <div>
                        <img src={Logo} className={styles.mobileNavigationbarLogo} />
                    </div>
                    <div>
                        <img src={Menu} className={styles.mobileNavigationbarMenu} onClick={this.props.toggleMenu}/>
                    </div>
                </div>

                {/* Desktop */}
                <div className={styles.desktopNavigationbar}>
                    <ul className={styles.desktopNavigationBranding}>
                        <img src={Logo} className={styles.desktopNavigationbarLogo} />
                    </ul>
                    <ul className={styles.desktopNavigationMenu}>
                        <li>Home</li>
                        <li>Acerca de</li>
                        <li>Nuevos pacientes</li>
                        <li>Equipo</li>
                        <li>Servicios</li>
                        <li>Contacto</li>
                    </ul>
                </div>
            </nav>
        );
    }

}
export default DesktopNavigationBarComponent;