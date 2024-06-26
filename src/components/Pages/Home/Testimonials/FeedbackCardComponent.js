import React, { Component } from 'react'
import styles from './FeedbackCard.module.css'

class FeedbackCardComponent extends Component {

    render(){
        const { comment, name, style, initial } = this.props;

        return(
            <div className={styles.commentCardContainer} style={style}>
                <div className={styles.commentBox}>
                    <p className={styles.text}>{ comment }</p>
                </div>
                <div className={styles.signatureContainer}>
                    <div className={ styles.InitialChip }>
                        <span>{ initial }</span>
                    </div>
                    <p>{ name }</p>
                </div>
            </div>
        );
    }
}

export default FeedbackCardComponent