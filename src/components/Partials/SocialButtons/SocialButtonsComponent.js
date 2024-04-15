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
                <div className={ styles.IconChip }>
                    <img src={ facebook }/>
                </div>
                <div className={ styles.IconChip }>
                    <img src={ instagram }/>
                </div>
                <div className={ styles.IconChip }>
                    <img src={ google }/>
                </div>
                <div className={ styles.IconChip }>
                    <img src={ whatsapp }/>
                </div>
            </div>
        );
    }
}   
export default SocialButtonsComponent