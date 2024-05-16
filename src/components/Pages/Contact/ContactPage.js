import React, { Component } from 'react'
import styles from './ContactPage.module.css'
import ContactSectionComponent from '../../Partials/ContactSection/ContactSectionComponent';
import FooterSectionComponent from '../../Navigation/Footer/FooterSectionComponent';
import dentist from '../../../assets/images/dentist.png';

class ContactPage extends Component {

    render(){
        return(
            <section className="Page">
                <div className="PageSectionContainer">
                    {/* Title */}
                    <div className="PageTitleContainer">
                        <h1 className="PageTitleHeading">
                            Contact
                        </h1>
                    </div>

                </div>
                <div className='PageSectionContainer'>
                    <div className={ styles.Article }>
                        <div className={ styles.PictureContainer}>
                            <img src={dentist}/>
                        </div>
                        <div className={ styles.TextContainer}>
                            <h2>Do you need a quote or to make an appointment?</h2>
                            <div className={ styles.PictureContainerMobile}>
                                <img src={dentist}/>
                            </div>
                            <p>
                            If you need a quote for a particular service, we invite you to send us a message using the form below. Similarly, if you need to make an appointment, do not hesitate to contact us by phone or through the form below.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='PageSectionContainer'>
                    {/* Contact form */}
                    <ContactSectionComponent />
                </div>
                <FooterSectionComponent />
            </section>
        );
    }
}
export default ContactPage