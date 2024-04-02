import React, { Component } from 'react'
import styles from './WelcomeIntro.module.css'
import woman from '../../../assets/images/intro-woman.jpeg'

class WelcomeIntroComponent extends Component{

    render(){
        return(
            <section className={styles.welcomeIntroContainer}>
                <img class={styles.headingPicture} src={woman} />
                <h1 class={styles.titleHeading}>Bienvenido a Dental House Tijuana</h1>
                <p className={styles.text}>
                Here at Dental House Tijuana, we believe that a smile tells a thousand words, and we are dedicated to giving our patients high-quality dental care. We offer a full range of dental services, so all of your family’s needs are met under one roof.
                Our goal is for you to leave our office with a memorable and enjoyable dental experience, which is why our welcoming and compassionate staff will do everything they can to make you feel right at home.
                If you are looking to brighten and enhance your smile, please don’t hesitate to call us today at (664) 623-2236!
                </p>
            </section>
        );
    }

}
export default WelcomeIntroComponent