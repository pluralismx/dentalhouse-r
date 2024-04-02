import React, { Component } from 'react'
import styles from './Home.module.css'
import VideoBannerComponent from './Video_banner/VideoBannerComponent';
import QuickContactComponent from './Quick_contact/QuickContactComponent';
import WelcomeIntroComponent from './Welcome_intro/WelcomeIntroComponent';
import FeedbackComponent from './Feedback/FeedbackComponent';

class HomeComponent extends Component {

    render(){
        return(
            <section className={styles.homePageSection}>
                <VideoBannerComponent />
                <QuickContactComponent />
                <WelcomeIntroComponent />
                <FeedbackComponent />
            </section>
        );
    }
}
export default HomeComponent