import React, {Component} from 'react'
import styles from './SocialButtons.module.css'
import facebook from '../../../assets/images/facebook-white.png'
import instagram from '../../../assets/images/instagram-white.png'
import google from '../../../assets/images/google-white.png'
import whatsapp from '../../..//assets/images/whatsapp-white.png'


class SocialButtonsComponent extends Component {
    render() {
        return(
            <div className={ styles.IconsContainer }>
                <a href="https://www.facebook.com/DentalHOUSEOtay">
                    <div className={ styles.IconChip }>
                        <img src={ facebook }/>
                    </div>
                </a>
                <a href="https://www.instagram.com/dentalhousetijuana/">
                    <div className={ styles.IconChip }>
                        <img src={ instagram }/>
                    </div>
                </a>
                <a href="https://maps.app.goo.gl/bgQNDTXaMUsLQRMs5">
                    <div className={ styles.IconChip }>
                        <img src={ google }/>
                    </div>
                </a>
                <a href="https://wa.me/526648271147">
                    <div className={ styles.IconChip }>
                        <img src={ whatsapp }/>
                    </div>
                </a>
            </div>
        );
    }
}   
export default SocialButtonsComponent