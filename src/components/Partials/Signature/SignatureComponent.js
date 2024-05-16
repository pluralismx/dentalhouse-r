import React, { Component } from 'react'
import styles from './Signature.module.css'

class SignatureComponent extends Component {
    render() {
        return(
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <p className={styles.signatureText}>&copy; Copyright 2024 Dental House Tijuana</p>
                    <p className={styles.signatureText}>Website by Pluralis</p>
                </div>
            </div>
        );
    }
}
export default SignatureComponent;