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
                                Servicios
                            </h1>
                        </div>
                        {/* Intro */}
                        <div className={ styles.Article }>
                            <div className={ styles.PictureContainer}>
                                <img src={ friends }/>
                            </div>
                            <div className={ styles.TextContainer}>
                                <h1>Variedad de servicios en un solo lugar</h1>
                                <p>
                                    En Dental House Tijuana, nos dedicamos a proporcionar una 
                                    gama completa de servicios dentales para usted y su familia. 
                                    Nuestro equipo de profesionales altamente capacitados se 
                                    compromete a brindarle la más alta calidad de atención dental. 
                                    Desde la prevención de problemas dentales hasta el tratamiento 
                                    de afecciones actuales, estamos aquí para cuidar de su salud 
                                    bucal de manera integral en cada visita.
                                </p>
                                <ul>
                                    <li>Carillas</li>
                                    <li>Dentadura postiza</li>
                                    <li>Coronas de porcelana</li>
                                    <li>Implantes dentales</li>
                                    <li>Ortodoncia</li>
                                    <li>Endodoncia</li>
                                    <li>Odontologia general</li>
                                    <li>Lista de precios MX VS USA</li>
                                </ul>
                            </div>
                        </div>
                        {/* Veneers */}
                        <div className={ styles.Article }>
                            <div className={ styles.PictureContainer}>
                                <img src={ veneers }/>
                                <div className={styles.PictureContainerFooter}>
                                    <button className="btn-accent">Pedir una cita</button>
                                </div>
                            </div>
                            <div className={ styles.TextContainer}>
                                <h1>Carillas</h1>
                                <p>
                                Las carillas de porcelana son finas capas hechas a medida de materiales del color de los dientes diseñadas para cubrir la superficie frontal de los dientes y mejorar la apariencia. Estas conchas se adhieren a la parte frontal de los dientes cambiando su color, forma, tamaño o longitud. Recomendamos este tratamiento a cualquier persona que experimente una decoloración que no se pueda solucionar con blanqueamiento o si tiene los dientes dañados. Las carillas de porcelana también son una opción si no estás satisfecho con la forma o el aspecto de tus dientes naturales.
                                </p>
                                <div className={styles.TextContainerFooter}>
                                    <button className="btn-accent">Pedir una cita</button>
                                </div>
                            </div>
                        </div>
                        {/* Dentures */}
                        <div className={ styles.Article }>
                            <div className={ styles.PictureContainer}>
                                <img src={ dentures }/>
                                <div className={styles.PictureContainerFooter}>
                                    <button className="btn-accent">Pedir una cita</button>
                                </div>
                            </div>
                            <div className={ styles.TextContainer}>
                                <h1>Dentadura postiza</h1>
                                <p>
                                Si le faltan dientes, las dentaduras postizas pueden brindarle una solución positiva para mejorar su salud bucal. Estamos orgullosos de ofrecer dentaduras postizas diseñadas para adaptarse a su boca para un funcionamiento adecuado y una comodidad única. Después de su cita, le brindaremos información sobre el cuidado de su dentadura postiza en el hogar. Recomendamos encarecidamente programar citas de seguimiento para limpiezas periódicas de dentaduras postizas.
                                </p>
                                <div className={styles.TextContainerFooter}>
                                    <button className="btn-accent">Pedir una cita</button>
                                </div>
                            </div>
                        </div>
                        {/* Crowns */}
                        <div className={ styles.Article }>
                            <div className={ styles.PictureContainer}>
                                <img src={ crowns }/>
                                <div className={styles.PictureContainerFooter}>
                                    <button className="btn-accent">Pedir una cita</button>
                                </div>
                            </div>
                            <div className={ styles.TextContainer}>
                                <h1>Coronas de porcelana</h1>
                                <p>
                                Elegir coronas de porcelana es el método ideal para lograr una sonrisa de aspecto notablemente natural. Son la opción preferida cuando no es posible simplemente empastar un diente. Hay situaciones en las que la caries dental es tan extensa que se hacen necesarias coronas de porcelana. Además, se emplean para dientes gravemente dañados o dientes que han sufrido múltiples empastes. Las coronas de porcelana se colocan directamente sobre los dientes, lo que garantiza su funcionalidad, incluso cuando se someten a una fuerte presión de mordida. Hay varios tipos de coronas de porcelana disponibles, por lo que es fundamental consultar con su dentista para determinar la opción más adecuada para usted.
                                </p>
                                <div className={styles.TextContainerFooter}>
                                    <button className="btn-accent">Pedir una cita</button>
                                </div>
                            </div>
                        </div>
                        {/* Implants */}
                        <div className={ styles.Article }>
                            <div className={ styles.PictureContainer}>
                                <img src={ implants }/>
                                <div className={styles.PictureContainerFooter}>
                                    <button className="btn-accent">Pedir una cita</button>
                                </div>
                            </div>
                            <div className={ styles.TextContainer}>
                                <h1>Implantes dentales</h1>
                                <p>
                                Cuando le faltan dientes, una solución alternativa a las dentaduras postizas son los implantes dentales. Si bien las dentaduras postizas son removibles, los implantes dentales proporcionan dientes nuevos permanentes para restaurar la función y apariencia de la boca. Los implantes dentales tienden a ofrecer una solución exitosa y duradera a la pérdida de algunos o todos los dientes.
                                </p>
                                <div className={styles.TextContainerFooter}>
                                    <button className="btn-accent">Pedir una cita</button>
                                </div>
                            </div>
                        </div>
                        {/* Ortho */}
                        <div className={ styles.Article }>
                            <div className={ styles.PictureContainer}>
                                <img src={ orthodontics }/>
                                <div className={styles.PictureContainerFooter}>
                                    <button className="btn-accent">Pedir una cita</button>
                                </div>
                            </div>
                            <div className={ styles.TextContainer}>
                                <h1>Ortodoncia</h1>
                                <p>
                                Los dientes desalineados o mal colocados pueden restar valor a nuestra apariencia. La especialidad de ortodoncia se enfoca en corregir dientes y huesos mal colocados mediante la colocación de aparatos ortopédicos y otros dispositivos ortopédicos. Es difícil mantener limpios los dientes desalineados, lo que aumenta el riesgo de pérdida prematura debido a caries y enfermedades de las encías.
                                </p>
                                <div className={styles.TextContainerFooter}>
                                    <button className="btn-accent">Pedir una cita</button>
                                </div>
                            </div>
                        </div>
                        {/* Endodontics */}
                        <div className={ styles.Article }>
                            <div className={ styles.PictureContainer}>
                                <img src={ endodontics }/>
                                <div className={styles.PictureContainerFooter}>
                                    <button className="btn-accent">Pedir una cita</button>
                                </div>
                            </div>
                            <div className={ styles.TextContainer}>
                                <h1>Endodoncia</h1>
                                <p>
                                Un tratamiento odontológico que consiste en la eliminación completa de la pulpa y posterior obturación y sellado tridimensional de los conductos radiculares. Se realiza sobre dientes traumatizados, fracturados o con caries profundas que llegan hasta la pulpa dental, provocando infección y dolor continuo y persistente que se intensifica con estímulos fríos o calientes, alimentos dulces o ácidos. Esta especialidad tiene como objetivo salvar tu diente y sirve como una gran alternativa a la extracción.
                                </p>
                                <div className={styles.TextContainerFooter}>
                                    <button className="btn-accent">Pedir una cita</button>
                                </div>
                            </div>
                        </div>
                        {/* Gral. Dentistry */}
                        <div className={ styles.Article }>
                            <div className={ styles.PictureContainer}>
                                <img src={ dentistry }/>
                                <div className={styles.PictureContainerFooter}>
                                    <button className="btn-accent">Pedir una cita</button>
                                </div>
                            </div>
                            <div className={ styles.TextContainer}>
                                <h1>Odontologia general</h1>
                                <p>
                                Ayudar a nuestros pacientes a mantener una boca y una sonrisa saludables es el principal objetivo de la odontología general. Preferimos brindar atención preventiva menor que ver a los pacientes sufrir con tratamientos más intensivos por un problema que no se resolvió a tiempo. Queremos asegurarnos de que tu salud bucal esté en su estado óptimo y contribuyendo positivamente a la salud de todo tu cuerpo. Estamos aquí para alegrar su sonrisa y allanar el camino hacia una vida mejor.
                                </p>
                                <div className={styles.TextContainerFooter}>
                                    <button className="btn-accent">Pedir una cita</button>
                                </div>
                            </div>
                        </div>
                        <div className="PageTitleContainer">
                            <h1 className="PageTitleHeading">
                                Comparación de precios
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
export default ServicesPage