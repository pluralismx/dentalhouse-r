import React, { Component } from 'react'
import styles from './ContactSection.module.css'

class ContactSectionComponent extends Component {

    render(){
        return(
            <section className={ styles.ContactSectionWrapper }>
                <div className={ styles.ContactSectionContainer }>
                    <div className={ styles.ContactContainer }>
                        <div className={ styles.MapContainer}>
                            <div className={ styles.MapContainerHeader }>
                            </div>
                            <div className={ styles.MapContainerBody }>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3363.7493084045514!2d-116.94778791420165!3d32.53284182879825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d9479f23886a35%3A0xa42740eabbfc8146!2sDental%20HOUSE!5e0!3m2!1ses-419!2smx!4v1712093618779!5m2!1ses-419!2smx"
                                    width={'100%'}
                                    height={'100%'}
                                    style={{ border: '0' }} // Define inline styles as an object
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                        <div className={ styles.FormContainer }>
                            <div className={styles.Form}>
                                <div className={styles.InputBlock}>
                                    <input type="text" placeholder='Nombre'/>
                                </div>

                                <div className={styles.InputBlock}>
                                    <select>
                                        <option>USA</option>
                                        <option>MX</option>
                                    </select>
                                    <input type="text" placeholder='Teléfono'/>
                                </div>

                                <div className={styles.InputBlock}>
                                    <input type="text" placeholder='Email'/>
                                </div>

                                <div className={styles.InputBlock}>
                                    <textarea placeholder='Cómo lo podemos ayudar?'></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

}
export default ContactSectionComponent