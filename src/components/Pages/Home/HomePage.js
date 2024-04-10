import React, { Component } from 'react'
import styles from './HomePage.module.css'
import ContactSectionComponent from '../../Partials/ContactSection/ContactSectionComponent'
import facebook from '../../../assets/images/facebook-white.png'
import instagram from '../../../assets/images/instagram-white.png'
import google from '../../../assets/images/google-white.png'
import whatsapp from '../../../assets/images/whatsapp-white.png'
import woman from '../../../assets/images/intro-woman.jpeg'
import implant_icon from '../../../assets/images/dental-implant.png'
import braces_icon from '../../../assets/images/braces.png'
import root_icon from '../../../assets/images/root-canal.png'
import aetna from '../../../assets/images/aetna.png'
import deltadent from '../../../assets/images/delta-dental.png'
import metlife from '../../../assets/images/metlife.png'

class HomePage extends Component {

    render(){
        return(
            <section className="Page">
                {/* Banner */}
                <section className={ styles.BannerSectionWrapper }>
                    <video src="https://dentalhousetijuana.com/wp-content/uploads/2023/10/dental07.mp4" className={ styles.BannerVideo } autoPlay={true} muted loop>
                    </video>
                    <div className={ styles.BannerText}>
                        <h1 className={ styles.SubHeader}>Dentist in Tijuana, B.C.</h1>
                        <h1 className={ styles.MainHeading}>We welcome new patients</h1>
                        <button className="btn-accent">Request an appointment today</button>
                    </div>
                </section>
                {/* Quick contact */}
                <section className={ styles.QuickContactSectionWrapper }>
                    <div className={ styles.QuickContactBrick }>
                        <span>Call us: +52 {'('}664{')'} 623 2236</span>
                    </div>
                    <div className={ styles.QuickContactBrick }>
                        <span>Get directions</span>
                    </div>
                    <div className={ styles.QuickContactBrick }>
                        <span>Request an appointment</span>
                    </div>
                    <div className={ styles.SocialIconContainer }>
                        <div className={ styles.SocialIconChip }>
                            <img src={facebook} />
                        </div>
                        <div className={ styles.SocialIconChip }>
                            <img src={whatsapp} />
                        </div>
                        <div className={ styles.SocialIconChip }>
                            <img src={google} />
                        </div>
                        <div className={ styles.SocialIconChip }>
                            <img src={instagram} />
                        </div>
                    </div>
                </section>
                {/* Welcome */}
                <section className={ styles.WelcomeSectionWrapper }>
                <div className="PageTitleContainer">
                        <h1 className="PageTitleHeading">Your trusted dentist</h1>
                    </div>
                    <div className= { styles.WelcomeSectionBody }>
                        <div className={ styles.WelcomeSectionText}>
                            {/* <h1>Welcome to Dental House Tijuana</h1> */}
                            <p>
                                Here at Dental House Tijuana, we believe that a smile tells a thousand words, 
                                and we are dedicated to giving our patients high-quality dental care. We offer a 
                                full range of dental services, so all of your family’s needs are met under one roof.
                            </p>
                            <p>
                                Our goal is for you to leave our office with a memorable and enjoyable dental experience, 
                                which is why our welcoming and compassionate staff will do everything they can to make you feel right at home.
                            </p>
                            <p>
                                If you are looking to brighten and enhance your smile, please don’t hesitate 
                                to call us today at {'('}664{')'} 623-2236.
                            </p>
                        </div>
                        <img src={ woman } />
                    </div>
                </section>
                {/* Offers */}
                <section className={ styles.OffersSectionContainer }>
                    <div className="PageTitleContainer">
                        <h1 className="PageTitleHeading">All services in one place</h1>
                    </div>
                    <div className={ styles.OffersSectionContainerBody }>
                        {/* Card 1 */}
                        <div className={ styles.OfferCard}>
                            <div className={ styles.OfferCardHeader }>
                                <h1>Implants</h1>
                            </div>
                            <div className={ styles.OfferCardBody }>
                                <img src={ implant_icon }/>
                            </div>
                            <div className={ styles.OfferCardFooter }>
                                <button className="btn-accent">details</button>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className={ styles.OfferCard}>
                            <div className={ styles.OfferCardHeader }>
                                <h1>Braces</h1>
                            </div>
                            <div className={ styles.OfferCardBody }>
                                <img src={ braces_icon }/>
                            </div>
                            <div className={ styles.OfferCardFooter }>
                                <button className="btn-accent">details</button>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className={ styles.OfferCard}>
                            <div className={ styles.OfferCardHeader }>
                                <h1>Root canal</h1>
                            </div>
                            <div className={ styles.OfferCardBody }>
                                <img src={ root_icon }/>
                            </div>
                            <div className={ styles.OfferCardFooter }>
                                <button className="btn-accent">details</button>
                            </div>
                        </div>
                    </div>
                    <div className={ styles.OffersSectionContainerBody2 }>
                        <p>
                            We're all about making your dental experience easy and enjoyable. From routine
                            check-ups to advanced treatments, we've got everything you need right here
                            under one roof. No need to run around to different places - we've got you
                            covered! Our friendly team is here to ensure your visit is stress-free and
                            comfortable. Come on in and let us take care of your smile!"
                        </p>
                    </div>
                    <div className={ styles.OffersSectionContainerFooter }>
                        <button className="btn-accent">See all services</button>
                    </div>
                </section>
                {/* Insurances */}
                <section className={ styles.InsurancesSectionContainer }>
                    <div className="PageTitleContainer">
                        <h1 className="PageTitleHeading">Accepted Insurances</h1>
                    </div>
                    <div className={ styles.InsurancesSectionContainerBody }>
                        <div className={ styles.InsurancesSectionContainerBodyText }>
                            <p>
                                We're delighted to inform you that we accept a wide range of dental insurances, 
                                ensuring that our valued patients can receive the treatment they need without
                                worrying about financial constraints. Whether you're covered by a major insurance 
                                provider or have a lesser-known plan, we're here to assist you in navigating the 
                                insurance process seamlessly. Our dedicated team will work closely with you to 
                                maximize your benefits and minimize out-of-pocket expenses. At our clinic, quality 
                                dental care meets convenience and affordability, ensuring that your oral health 
                                remains a top priority. Schedule an appointment with us today and experience the 
                                difference of comprehensive dental care with insurance acceptance.
                            </p>
                        </div>
                        <div className={ styles.InsurancesSectionContainerBodyCards }>
                            <div className={ styles.LogoCard }>
                                <img src={ aetna } />
                            </div>
                            <div className={ styles.LogoCard }>
                                <img src={ deltadent } />
                            </div>
                            <div className={ styles.LogoCard }>
                                <img src={ metlife } />
                            </div>
                        </div>
                    </div>
                </section>
                {/* Testimonials */}
                <section className={ styles.TestimonialsSectionWrapper }>
                    <div className="PageTitleContainer">
                        <h1 className="PageTitleHeading">Satisfaction</h1>
                    </div>
                    <div className={ styles.TestimonialsSectionBody }>
                        <div className={ styles.TestimonialCard }>
                            <div className={ styles.TestimonialCardBody }>
                                <p>
                                    I love the serivce.
                                </p>
                            </div>
                            <div className={ styles.TestimonialCardFooter }>
                                <div className={ styles.TestimonialCardInitialLetter }>
                                    A.
                                </div>
                                <span>
                                    Anthony Cocksucker
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Services */}
                <section></section>
                {/* Location */}
                <section></section>
                {/* Contact */}
                <section className={ styles.ContactSectionWrapper }>
                <div className="PageTitleContainer">
                    <h1 className="PageTitleHeading">
                        Contacto
                    </h1>
                </div>
                <ContactSectionComponent />
                </section>

            </section>
        );
    }
}
export default HomePage