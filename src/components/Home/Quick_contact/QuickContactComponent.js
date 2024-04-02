import React, { Component } from 'react'
import styles from './QuickContact.module.css'
import facebook from '../../../assets/images/facebook-white.png'
import instagram from '../../../assets/images/instagram-white.png'
import google from '../../../assets/images/google-white.png'
import whatsapp from '../../../assets/images/whatsapp-white.png'

class QuickContactComponent extends Component{

    render(){
        return(
            <section className={styles.quickContactContainer}>
                <span className={styles.contactButton}>
                    Llámenos: {'('}664{')'}623-2236
                </span>
                <span className={styles.contactButton}>
                    Obtener ubicación:
                </span>
                <span className={styles.contactButton}>
                    Pedir una cita
                </span>
                <div className={styles.socialContainer}>
                    <div className={styles.iconContainer}>
                        <img src={facebook}></img>
                    </div>
                    <div className={styles.iconContainer}>
                        <img src={instagram}></img>
                    </div>
                    <div className={styles.iconContainer}>
                        <img src={google}></img>
                    </div>
                    <div className={styles.iconContainer}>
                        <img src={whatsapp}></img>
                    </div>
                </div>
            </section>
        );
    }

}
export default QuickContactComponent