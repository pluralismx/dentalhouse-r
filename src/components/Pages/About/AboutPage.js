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
                                Acerca de nosotros
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
                                        Dental House es el fruto de la visión y el arduo trabajo de dos apasionados odontólogos, 
                                        Norma Alicia Pérez y Miguel Alfredo Topete. La semilla de esta clínica fue plantada en 1987, 
                                        cuando ambos graduados de la Universidad Autónoma de Baja California decidieron unir sus 
                                        conocimientos y habilidades para brindar atención dental de calidad a la comunidad de Tijuana. 
                                        A lo largo de los años, su compromiso con la excelencia y el cuidado del paciente ha sido la 
                                        piedra angular de Dental House, ganándose la confianza y el respeto de quienes buscan servicios 
                                        dentales de primera categoría. Su legado perdura en cada sonrisa que ayudan a crear y en cada 
                                        paciente que camina por sus puertas en busca de salud bucal y bienestar.
                                    </p>
                                    <p>
                                        Cuando Norma Alicia Pérez y Miguel Alfredo Topete fundaron Dental House en 1987, eligieron 
                                        establecerse en un lugar que en aquel entonces apenas comenzaba a urbanizarse. Esta decisión 
                                        estratégica les permitió convertirse en pioneros en una zona en crecimiento, donde la necesidad 
                                        de servicios de salud dental estaba en aumento. Además, la reciente apertura de la garita de 
                                        Otay facilitó el acceso de pacientes de todas partes del mundo, convirtiendo a Dental House 
                                        en un destino conveniente y accesible para quienes buscaban atención dental de calidad 
                                        mientras cruzaban la frontera. Este contexto único contribuyó al rápido crecimiento y éxito 
                                        de la clínica, consolidándola como un referente confiable en el cuidado dental en la región.
                                    </p>
                                    <div class={styles.CellphonePicture}>
                                        <br/>
                                        <img src={ sign } width={'100%'} />
                                        <span className="leyend">Letrero luminoso de Dental House en sus inicios ca. 1987 </span>
                                        <br/>
                                        <br/>
                                    </div>
                                    <p>
                                        A lo largo de los años, Dental House ha experimentado un notable crecimiento, ampliando su equipo 
                                        de odontólogos y especialistas para convertirse en una clínica dental completa, especializándose 
                                        en diversas áreas de la odontología. Lo que comenzó como un modesto consultorio se ha transformado 
                                        en un centro de salud dental de renombre, con un equipo multidisciplinario de expertos en ortodoncia, 
                                        periodoncia, endodoncia y más. Esta diversificación ha permitido a Dental House ofrecer una gama 
                                        completa de servicios dentales, desde limpiezas y extracciones hasta tratamientos de ortodoncia 
                                        avanzados y cirugía oral. Con un enfoque en la calidad, la innovación y el cuidado personalizado, 
                                        la clínica continúa creciendo y adaptándose para satisfacer las necesidades cambiantes de sus 
                                        pacientes, manteniendo siempre el compromiso de proporcionar una atención dental excepcional en 
                                        cada visita.
                                    </p>
                                </div>
                                {/* Image */}
                                <div className={styles.ColumnPicture}>
                                    <div className={styles.ColumnPictureContainer}>
                                        <img src={ sign }/>
                                        <span>Letrero luminoso de Dental House en sus inicios {'('}ca. 1987{')'} </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <img className={ styles.DentistsImage } src={ dentists }/>
                        <div className="PageTitleContainer">
                            <h1 className="PageTitleHeading">
                                Contacto
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