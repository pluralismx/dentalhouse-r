import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styles from './HomePage.module.css'
import TestimonialsSectionComponent from './Testimonials/TestimonialsSectionComponent'
import ContactSectionComponent from '../../Partials/ContactSection/ContactSectionComponent'
import facebook from '../../../assets/images/facebook-white.png'
import instagram from '../../../assets/images/instagram-white.png'
import google from '../../../assets/images/google-white.png'
import whatsapp from '../../../assets/images/whatsapp-white.png'
import woman from '../../../assets/images/intro-woman.jpeg'
import implant_icon from '../../../assets/images/dental-implant-white.png'
import braces_icon from '../../../assets/images/braces-white.png'
import root_icon from '../../../assets/images/root-canal-white.png'
import aetna from '../../../assets/images/aetna.png'
import deltadent from '../../../assets/images/delta-dental.png'
import metlife from '../../../assets/images/metlife.png'
import carestream from '../../../assets/images/carestream.png'
import coltene from '../../../assets/images/coltene.png'
import septodont from '../../../assets/images/septodont.png'
import dentsply from '../../../assets/images/dentsply.png'
import ultradent from '../../../assets/images/ultradent.png'
import ormco from '../../../assets/images/ormco.png'
import straumann from '../../../assets/images/straumann.png'
import ortho from '../../../assets/images/orthotechnology.png'
import FooterSectionComponent from '../../../components/Navigation/Footer/FooterSectionComponent'

class HomePage extends Component {

    changeSelection = (index) => {
        this.props.changeActiveItem(index);
    }

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
                        <a href="#contact">
                            <button className="btn-accent">Request an appointment today</button>
                        </a>
                    </div>
                </section>
                {/* Quick contact */}
                <section className={ styles.QuickContactSectionWrapper }>
                    <a href="tel:+526646232236">
                        <div className={ styles.QuickContactBrick }>
                            <span>Call us: +52 {'('}664{')'} 623 2236</span>
                        </div>
                    </a>
                    <a href="#map">
                        <div className={ styles.QuickContactBrick }>
                            <span>Get directions</span>
                        </div>
                    </a>
                    <a href="#contact">
                        <div className={ styles.QuickContactBrick }>
                            <span>Request an appointment</span>
                        </div>
                    </a>
                    <div className={ styles.SocialIconContainer }>
                        <a href="https://www.facebook.com/DentalHOUSEOtay">
                            <div className={ styles.SocialIconChip }>
                                <img src={facebook} />
                            </div>
                        </a>
                        <a href="https://wa.me/526648271147">
                            <div className={ styles.SocialIconChip }>
                                <img src={whatsapp} />
                            </div>
                        </a>
                        <a href="https://maps.app.goo.gl/bgQNDTXaMUsLQRMs5">
                            <div className={ styles.SocialIconChip }>
                                <img src={google} />
                            </div>
                        </a>
                        <a href="https://www.instagram.com/dentalhousetijuana/">
                            <div className={ styles.SocialIconChip }>
                                <img src={instagram} />
                            </div>
                        </a>
                    </div>
                </section>
                {/* Welcome */}
                <section className={ styles.WelcomeSectionWrapper }>
                    <div className={ styles.WelcomeSectionHeader }>
                        <h1>Your trusted dentist</h1>
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
                <section className={ styles.OffersSectionWrapper}>
                    <div className={ styles.OffersSectionHeader }>
                        <h1>All services in one place</h1>
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
                            {/* <div className={ styles.OfferCardFooter }>
                                <Link to="/services#implants">
                                    <button className="btn-accent">details</button>
                                </Link>
                            </div> */}
                        </div>

                        {/* Card 2 */}
                        <div className={ styles.OfferCard}>
                            <div className={ styles.OfferCardHeader }>
                                <h1>Braces</h1>
                            </div>
                            <div className={ styles.OfferCardBody }>
                                <img src={ braces_icon }/>
                            </div>
                            {/* <div className={ styles.OfferCardFooter }>
                                <button className="btn-accent">details</button>
                            </div> */}
                        </div>

                        {/* Card 3 */}
                        <div className={ styles.OfferCard}>
                            <div className={ styles.OfferCardHeader }>
                                <h1>Root canal</h1>
                            </div>
                            <div className={ styles.OfferCardBody }>
                                <img src={ root_icon }/>
                            </div>
                            {/* <div className={ styles.OfferCardFooter }>
                                <button className="btn-accent">details</button>
                            </div> */}
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
                        <Link to="/services">
                            <button className="btn-accent" onClick={ () => {this.changeSelection('Servicios')} }>See all services</button>
                        </Link>
                    </div>
                </section>
                {/* Insurances */}
                <section className={ styles.InsurancesSectionContainer }>
                    <div className={ styles.InsurancesSectionHeader }>
                        <h1>Accepted Insurances</h1>
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
                <TestimonialsSectionComponent />
                {/* Partners */}
                <section className={ styles.PartnersSectionWrapper }>
                    <div className={ styles.PartnersSectionHeader }>
                        <h1>Partners & Products</h1>
                    </div>
                    <div className={ styles.PartnersSectionBody}>
                        <div className={ styles.ProductCard }>
                            <img className={ styles.PartnersLogo } src={ carestream }/>
                        </div>
                        <div className={ styles.ProductCard }>
                            <img className={ styles.PartnersLogo } src={ coltene }/>
                        </div>
                        <div className={ styles.ProductCard }>
                            <img className={ styles.PartnersLogo } src={ septodont }/>
                        </div>
                        <div className={ styles.ProductCard }>
                            <img className={ styles.PartnersLogo } src={ dentsply }/>
                        </div>
                        <div className={ styles.ProductCard }>
                            <img width={"70px"} src={ ultradent }/>
                        </div>
                        <div className={ styles.ProductCard }>
                            <img className={ styles.PartnersLogo } src={ ormco }/>
                        </div>
                        <div className={ styles.ProductCard }>
                            <img className={ styles.PartnersLogo } src={ straumann }/>
                        </div>
                        <div className={ styles.ProductCard } >
                            <img src={ ortho } width={"70px"} />
                        </div>
                    </div>
                </section>
                {/* Contact */}
                <section id="contact" className={ styles.ContactSectionWrapper }>
                    <div className={ styles.ConctactSectionHeader }>
                        <h1>Contact</h1>
                    </div>
                    <ContactSectionComponent />
                </section>
                <FooterSectionComponent />
            </section>
        );
    }
}
export default HomePage