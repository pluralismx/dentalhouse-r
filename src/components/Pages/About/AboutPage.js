import React, { Component } from 'react'
import styles from './AboutPage.module.css'
import sign from '../../../assets/images/archive_picture_1.jpeg'
import ContactSectionComponent from '../../Partials/ContactSection/ContactSectionComponent';
import FooterSectionComponent from '../../Navigation/Footer/FooterSectionComponent';
import norma from '../../../assets/images/norma.jpeg'
import dentists from '../../../assets/images/omar_y_claudia.jpeg'

class AboutPage extends Component {

    render(){
        return(
            <section className="Page">
                <section className="PageSectionWrapper">
                    <div className="PageSectionContainer">
                        {/* Title */}
                        <div className="PageTitleContainer">
                            <h1 className="PageTitleHeading">
                                About us
                            </h1>
                        </div>
                        <div className={styles.Sheet}>
                            <div className={ styles.smallBanner }>
                                <img src={ norma } className={ styles.headerPicture }/>
                                <span className="leyend">Dr. Norma Alicia Pérez founder of Dental House</span>
                            </div>
                            <div className={styles.TwoColumnsContainer}>
                                {/* Text */}
                                <div className={styles.ColumnText}>
                                    <p>
                                        Dental House is the result of the vision and hard work of two passionate dentists, Norma Alicia Pérez and Miguel Alfredo Topete. The seed of this clinic was planted in 1987 when both graduates of the Autonomous University of Baja California decided to combine their knowledge and skills to provide quality dental care to the Tijuana community. Over the years, their commitment to excellence and patient care has been the cornerstone of Dental House, earning the trust and respect of those seeking top-tier dental services. Their legacy endures in every smile they help create and in every patient who walks through their doors in search of oral health and well-being.
                                    </p>
                                    <p>
                                        When Norma Alicia Pérez and Miguel Alfredo Topete founded Dental House in 1987, they chose to establish themselves in an area that was just beginning to urbanize at that time. This strategic decision allowed them to become pioneers in a growing area where the need for dental health services was increasing. Additionally, the recent opening of the Otay border crossing facilitated access for patients from all over the world, making Dental House a convenient and accessible destination for those seeking quality dental care while crossing the border. This unique context contributed to the clinic's rapid growth and success, establishing it as a reliable reference in dental care in the region.
                                    </p>
                                    <div class={styles.CellphonePicture}>
                                        <br/>
                                        <img src={ sign } width={'100%'} />
                                        <span className="leyend">First illuminated sign {'('}ca. 1987{')'} </span>
                                        <br/>
                                        <br/>
                                    </div>
                                    <p>
                                        Over the years, Dental House has experienced remarkable growth, expanding its team of dentists and specialists to become a comprehensive dental clinic specializing in various areas of dentistry. What began as a modest practice has transformed into a renowned dental health center, with a multidisciplinary team of experts in orthodontics, periodontics, endodontics, and more. This diversification has allowed Dental House to offer a complete range of dental services, from cleanings and extractions to advanced orthodontic treatments and oral surgery. With a focus on quality, innovation, and personalized care, the clinic continues to grow and adapt to meet the changing needs of its patients, always maintaining the commitment to provide exceptional dental care at every visit.
                                    </p>
                                </div>
                                {/* Image */}
                                <div className={styles.ColumnPicture}>
                                    <div className={styles.ColumnPictureContainer}>
                                        <img src={ sign }/>
                                        <span>First illuminated sign {'('}ca. 1987{')'} </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img className={ styles.DentistsImage } src={ dentists }/>
                        <div className="PageTitleContainer">
                            <h1 className="PageTitleHeading">
                                Contact
                            </h1>
                        </div>
                        <ContactSectionComponent />
                    </div>
                </section>
                <FooterSectionComponent />
            </section>
        );
    }
}
export default AboutPage