import React, { Component } from 'react'
import styles from './ServicesPage.module.css'
// Images
import friends from '../../../assets/images/ice-cream.jpeg'
import veneers from '../../../assets/images/veneers.jpeg'
import dentures from '../../../assets/images/denture.jpeg'
import crowns from '../../../assets/images/crown.jpeg'
import endodontics from '../../../assets/images/endodontics.jpeg'
import implants from '../../../assets/images/implants.jpeg'
import orthodontics from '../../../assets/images/orthodontics.jpeg'
import dentistry from '../../../assets/images/dentistry.jpeg'
// Contact
import ContactSectionComponent from '../../Partials/ContactSection/ContactSectionComponent'
// Footer
import FooterSectionComponent from '../../Navigation/Footer/FooterSectionComponent'


class ServicesPage extends Component {

    render(){
        return(
            <section className="Page">
                {/* Service list */}
                <section className="PageSectionWrapper">
                    <div className="PageSectionContainer">
                        {/* Title */}
                        <div className="PageTitleContainer">
                            <h1 className="PageTitleHeading">
                                Services
                            </h1>
                        </div>
                        {/* Intro */}
                        <div className={ styles.Article }>
                            <div className={ styles.PictureContainer}>
                                <img src={ friends }/>
                            </div>
                            <div className={ styles.TextContainer}>
                                <h1>Variety of services in one place</h1>
                                <p>
                                    At Dental House Tijuana, we are dedicated to providing a full range of dental services for you and your family. Our team of highly trained professionals is committed to delivering the highest quality of dental care. From preventing dental problems to treating existing conditions, we are here to take comprehensive care of your oral health at every visit.
                                </p>
                                <ul>
                                    <li><a href="#veneers">Veneers</a></li>
                                    <li><a href="#dentures">Dentures</a></li>
                                    <li><a href="#crowns">Crowns</a></li>
                                    <li><a href="#implants">Implants</a></li>
                                    <li><a href="#ortho">Orthodontics</a></li>
                                    <li><a href="#endodontics">Endodontics</a></li>
                                    <li><a href="#gral">General dentistry</a></li>
                                    <li><a href="#prices">Price list MX VS USA</a></li>
                                </ul>
                            </div>
                        </div>
                        {/* Veneers */}
                        <div className={ styles.Article } id="veneers">
                            <div className={ styles.PictureContainer}>
                                <img src={ veneers }/>
                                <div className={styles.PictureContainerFooter}>
                                    <a href="#contact">
                                        <button className="btn-accent">get an appointment</button>
                                    </a>
                                </div>
                            </div>
                            <div className={ styles.TextContainer}>
                                <h1>Veneers</h1>
                                <p>
                                    Porcelain veneers are custom-made, thin layers of tooth-colored materials designed to cover the front surface of teeth and enhance their appearance. These shells are bonded to the front of the teeth, changing their color, shape, size, or length. We recommend this treatment for anyone experiencing discoloration that cannot be resolved with whitening or for those with damaged teeth. Porcelain veneers are also an option if you are not satisfied with the shape or appearance of your natural teeth.                                </p>
                                <div className={styles.TextContainerFooter}>
                                    <a href="#contact">
                                        <button className="btn-accent">get an appointment</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Dentures */}
                        <div className={ styles.Article } id="dentures">
                            <div className={ styles.PictureContainer}>
                                <img src={ dentures }/>
                                <div className={styles.PictureContainerFooter}>
                                    <a href="#contact">
                                        <button className="btn-accent">get an appointment</button>
                                    </a>
                                </div>
                            </div>
                            <div className={ styles.TextContainer}>
                                <h1>Dentures</h1>
                                <p>
                                    If you are missing teeth, dentures can provide a positive solution to improve your oral health. We are proud to offer dentures designed to fit your mouth for proper function and unique comfort. After your appointment, we will provide you with information on how to care for your dentures at home. We highly recommend scheduling follow-up appointments for regular denture cleanings.                                </p>
                                <div className={styles.TextContainerFooter}>
                                    <a href="#contact">
                                        <button className="btn-accent">get an appointment</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Crowns */}
                        <div className={ styles.Article } id="crowns">
                            <div className={ styles.PictureContainer}>
                                <img src={ crowns }/>
                                <div className={styles.PictureContainerFooter}>
                                    <a href="#contact">
                                        <button className="btn-accent">get an appointment</button>
                                    </a>
                                </div>
                            </div>
                            <div className={ styles.TextContainer}>
                                <h1>Crowns</h1>
                                <p>
                                    Choosing porcelain crowns is the ideal method for achieving a remarkably natural-looking smile. They are the preferred option when simply filling a tooth is not possible. There are situations where dental decay is so extensive that porcelain crowns become necessary. Additionally, they are used for severely damaged teeth or teeth that have undergone multiple fillings. Porcelain crowns are placed directly over the teeth, ensuring their functionality, even under strong biting pressure. There are several types of porcelain crowns available, so it is essential to consult with your dentist to determine the most suitable option for you.                                </p>
                                <div className={styles.TextContainerFooter}>
                                    <a href="#contact">
                                        <button className="btn-accent">get an appointment</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Implants */}
                        <div className={ styles.Article } id="implants">
                            <div className={ styles.PictureContainer}>
                                <img src={ implants }/>
                                <div className={styles.PictureContainerFooter}>
                                    <a href="#contact">
                                        <button className="btn-accent">get an appointment</button>
                                    </a>
                                </div>
                            </div>
                            <div className={ styles.TextContainer}>
                                <h1>Implants</h1>
                                <p>
                                    When you are missing teeth, an alternative solution to dentures is dental implants. While dentures are removable, dental implants provide permanent new teeth to restore the function and appearance of your mouth. Dental implants tend to offer a successful and long-lasting solution for the loss of some or all teeth.                                </p>
                                <div className={styles.TextContainerFooter}>
                                    <a href="#contact">
                                        <button className="btn-accent">get an appointment</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Ortho */}
                        <div className={ styles.Article } id="ortho">
                            <div className={ styles.PictureContainer}>
                                <img src={ orthodontics }/>
                                <div className={styles.PictureContainerFooter}>
                                    <a href="#contact">
                                        <button className="btn-accent">get an appointment</button>
                                    </a>
                                </div>
                            </div>
                            <div className={ styles.TextContainer}>
                                <h1>Orthodontics</h1>
                                <p>
                                    Misaligned or improperly positioned teeth can detract from our appearance. The specialty of orthodontics focuses on correcting misplaced teeth and bones through the use of braces and other orthodontic devices. Misaligned teeth are difficult to keep clean, increasing the risk of premature loss due to cavities and gum disease.                                </p>
                                <div className={styles.TextContainerFooter}>
                                    <a href="#contact">
                                    <button className="btn-accent">get an appointment</button>
                                    </a>
                                    
                                </div>
                            </div>
                        </div>
                        {/* Endodontics */}
                        <div className={ styles.Article } id="endodontics">
                            <div className={ styles.PictureContainer}>
                                <img src={ endodontics }/>
                                <div className={styles.PictureContainerFooter}>
                                    <a href="#contact">
                                    <button className="btn-accent">get an appointment</button>
                                    </a>
                                    
                                </div>
                            </div>
                            <div className={ styles.TextContainer}>
                                <h1>Endodontics</h1>
                                <p>
                                A dental treatment involving the complete removal of the pulp followed by the obturation and three-dimensional sealing of the root canals. It is performed on traumatized teeth, fractured teeth, or teeth with deep cavities that reach the dental pulp, causing infection and continuous, persistent pain that intensifies with cold or hot stimuli, sweet or acidic foods. This specialty aims to save your tooth and serves as a great alternative to extraction.                                </p>
                                <div className={styles.TextContainerFooter}>
                                    <a href="#contact">
                                    <button className="btn-accent">get an appointment</button>
                                    </a>
                                    
                                </div>
                            </div>
                        </div>
                        {/* Gral. Dentistry */}
                        <div className={ styles.Article } id="gral">
                            <div className={ styles.PictureContainer}>
                                <img src={ dentistry }/>
                                <div className={styles.PictureContainerFooter}>
                                    <a href="#contact">
                                        <button className="btn-accent">get an appointment</button>
                                    </a>
                                </div>
                            </div>
                            <div className={ styles.TextContainer}>
                                <h1>General dentistry</h1>
                                <p>
                                    Helping our patients maintain a healthy mouth and smile is the primary goal of general dentistry. We prefer to provide minor preventive care than to see patients suffer from more intensive treatments for problems that weren't addressed in time. We want to ensure that your oral health is at its optimum state and positively contributing to the health of your entire body. We are here to brighten your smile and pave the way to a better life.
                                </p>
                                <div className={styles.TextContainerFooter}>
                                    <a href="#contact">
                                        <button className="btn-accent">get an appointment</button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="PageTitleContainer" id="prices">
                            <h1 className="PageTitleHeading">
                                Price comparison
                            </h1>
                        </div>
                        {/* Price comparison */}
                        <table className={styles.PriceComparisonTable}>
                            <thead>
                                <tr>
                                    <th>Service</th>
                                    <th>Tijuana</th>
                                    <th>USA</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Exam and Evaluation</td>
                                    <td>$20</td>
                                    <td>$280</td>
                                </tr>
                                <tr>
                                    <td>White Composite Filling</td>
                                    <td>$65 – $85</td>
                                    <td>$190 – $270</td>
                                </tr>
                                <tr>
                                    <td>Root Canal Therapy</td>
                                    <td>$265 – $295</td>
                                    <td>$850 – $1,250</td>
                                </tr>
                                <tr>
                                    <td>Core Build Up Restoration</td>
                                    <td>$65</td>
                                    <td>$225</td>
                                </tr>
                                <tr>
                                    <td>Pre-Fabricated Post</td>
                                    <td>$100</td>
                                    <td>$265</td>
                                </tr>
                                <tr>
                                    <td>PFM Crowns – Esthetic Finish (Porcelain Edge)</td>
                                    <td>$325</td>
                                    <td>$865</td>
                                </tr>
                                <tr>
                                    <td>All Porcelain E.Max Crown or Veneers</td>
                                    <td>$425</td>
                                    <td>$1,150</td>
                                </tr>
                                <tr>
                                    <td>Zirconium Ceramic Crowns or Veneers</td>
                                    <td>$495</td>
                                    <td>$1,495</td>
                                </tr>
                                <tr>
                                    <td>Regular Extractions</td>
                                    <td>$75</td>
                                    <td>$165</td>
                                </tr>
                                <tr>
                                    <td>Surgical Extractions</td>
                                    <td>$125</td>
                                    <td>$295</td>
                                </tr>
                                <tr>
                                    <td>Wisdom Tooth Extraction – Simple</td>
                                    <td>$125</td>
                                    <td>$325</td>
                                </tr>
                                <tr>
                                    <td>Wisdom Tooth Extraction (Fully Impacted)</td>
                                    <td>$245</td>
                                    <td>$690</td>
                                </tr>
                                <tr>
                                    <td>Immediate Acrylic Full or Partial</td>
                                    <td>$385</td>
                                    <td>$825</td>
                                </tr>
                                <tr>
                                    <td>High Quality Full Denture / Arch</td>
                                    <td>$585</td>
                                    <td>$2,200</td>
                                </tr>
                                <tr>
                                    <td>Regular Cleaning – Prophylaxis</td>
                                    <td>$49</td>
                                    <td>$150</td>
                                </tr>
                                <tr>
                                    <td>Perio – Maintenance Cleaning (Whole Mouth)</td>
                                    <td>$145</td>
                                    <td>$425</td>
                                </tr>
                                <tr>
                                    <td>Perio – Scaling & Root Planing / Quadrant</td>
                                    <td>$125 – $160</td>
                                    <td>$415</td>
                                </tr>
                                <tr>
                                    <td>Individual Bone Graft</td>
                                    <td>$395</td>
                                    <td>$895</td>
                                </tr>
                                <tr>
                                    <td>Sinus Lift</td>
                                    <td>$1,000</td>
                                    <td>$895</td>
                                </tr>
                                <tr>
                                    <td>Dental Implant – Surgical Placement</td>
                                    <td>$795</td>
                                    <td>$2,250</td>
                                </tr>
                                <tr>
                                    <td>Abutment Placement (for Crown or Bridge)</td>
                                    <td>$380</td>
                                    <td>$1,250</td>
                                </tr>
                                <tr>
                                    <td>PFM Porcelain Crown for Implants</td>
                                    <td>$425</td>
                                    <td>$1,500</td>
                                </tr>
                                <tr>
                                    <td>Porcelain E-Max Crown for Implants</td>
                                    <td>$475</td>
                                    <td>$1,800</td>
                                </tr>
                                <tr>
                                    <td>Zirconium Crowns for Implants</td>
                                    <td>$530</td>
                                    <td>$2,500</td>
                                </tr>
                                <tr>
                                    <td>Connectors / Locators (for Dentures)</td>
                                    <td>$380</td>
                                    <td>$650</td>
                                </tr>
                            </tbody>
                        </table>
                        {/* Contact */}
                        <div className="PageTitleContainer" id="contact">
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
export default ServicesPage