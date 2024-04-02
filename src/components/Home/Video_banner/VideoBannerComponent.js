import React, { Component } from 'react';
import styles from './VideoBanner.module.css';

class VideoBannerComponent extends Component {
    render() {
        return (
            <section>
                <div className={styles.videoContainer}>
                    <video autoPlay loop muted className={styles.video}>
                        <source src="https://dentalhousetijuana.com/wp-content/uploads/2023/10/dental07.mp4" type="video/mp4" />
                    </video>
                    <div className={styles.textCarousel}>
                        <h1 className={styles.headingTitle}>Dentist in Tijuana, B.C.</h1>
                        <h1 className={styles.headingText}>We Welcome New Patients</h1>
                        <span className={styles.bannerButton}>Request an appointment today!</span>
                    </div>
                </div>
            </section>
        );
    }
}

export default VideoBannerComponent;
