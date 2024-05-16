import React, { Component } from 'react'
import styles from './FooterSection.module.css'
import facebook from '../../../assets/images/facebook.png'
import instagram from '../../../assets/images/instagram.png'
import google from '../../../assets/images/google.png'
import whatsapp from '../../../assets/images/whatsapp.png'
import SignatureComponent from '../../Partials/Signature/SignatureComponent'

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
                                <h1>Office Hours</h1>
                            </div>
                            <div className="FooterBlockBody">
                                <p>
                                    Monday to Friday 9 am - 5 pm
                                </p>
                                <p>
                                    Saturday 9 am - 2 pm
                                </p>
                                <p>
                                    Sundays closed
                                </p>
                            </div>
                        </div>
                        {/* Contact */}
                        <div className="FooterBlock">
                            <div className="FooterBlockHeading">
                                <h1>Address</h1>
                            </div>
                            <div className="FooterBlockBody">
                                <p>
                                    Blvd. Alberto Limón Padilla 22-2, Fovissste, 22510, Tijuana, B.C.
                                </p>
                                <p>
                                    <span>Phone: </span><a href="tel:+526646232236">+52 664 623 2236</a>
                                </p>
                            </div>
                        </div>
                    </footer>
                </div>
                <SignatureComponent/>
            </section>
        );
    }
}
export default FooterSectionComponent