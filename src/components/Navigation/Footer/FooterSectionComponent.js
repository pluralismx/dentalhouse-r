import React, { Component } from 'react'
import styles from './FooterSection.module.css'
import facebook from '../../../assets/images/facebook.png'
import instagram from '../../../assets/images/instagram.png'
import google from '../../../assets/images/google.png'
import whatsapp from '../../../assets/images/whatsapp.png'

class FooterSectionComponent extends Component {
    render() {
        return(
            <section className="FooterSectionWrapper">
                <div className="FooterSecionContainer">
                    <footer>
                        {/* Social */}
                        <div className="FooterBlock">
                            <div className="FooterBlockHeading">
                                <h1>Social</h1>
                            </div>
                            <div className="FooterBlockBody">
                                <div className={styles.SocialIconContainer}>
                                    <div className={ styles.SocialIconChip }>
                                        <img src={ facebook } />
                                    </div>
                                    <div className={ styles.SocialIconChip }>
                                        <img src={ google } />
                                    </div>
                                    <div className={ styles.SocialIconChip }>
                                        <img src={ instagram } />
                                    </div>
                                    <div className={ styles.SocialIconChip }>
                                        <img src={ whatsapp } />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Hours of operation */}
                        <div className="FooterBlock">
                            <div className="FooterBlockHeading">
                                <h1>Horario</h1>
                            </div>
                            <div className="FooterBlockBody">
                                <p>
                                    lunes a viernes 9 am - 5 pm
                                </p>
                                <p>
                                    Sábados 9 am - 2 pm
                                </p>
                                <p>
                                    Domingos Cerrado
                                </p>
                            </div>
                        </div>
                        {/* Contact */}
                        <div className="FooterBlock">
                            <div className="FooterBlockHeading">
                                <h1>Contacto</h1>
                            </div>
                            <div className="FooterBlockBody">
                                <p>
                                    Blvd. Alberto Limón Padilla 22-2, Fovissste, 22510, Tijuana, B.C.
                                </p>
                            </div>
                        </div>
                    </footer>
                </div>
            </section>
        );
    }
}
export default FooterSectionComponent