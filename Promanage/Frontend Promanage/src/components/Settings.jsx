import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from "./Settings.module.css";
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

const Settings = () => {
    return (
        <div className={styles.settings}>
            <div className={styles.header}>
                Settings
            </div>
            <div className={styles.form}>
                <div className={styles.container}>
                    <FontAwesomeIcon icon={faUser} className={styles.icon1} />
                    <input type="text" placeholder='Name' className={styles.name} />
                </div>
                <div className={styles.container}>
                    <FontAwesomeIcon icon={faEnvelope} className={styles.icon2} />
                    <input type="email" placeholder='Update Email' className={styles.email} />
                </div>
                <div className={styles.container}>
                    <FontAwesomeIcon icon={faLock} className={styles.icon3} />
                    <input type="password" placeholder='Old Password' className={styles.opassword} />
                </div>
                <div className={styles.container}>
                    <FontAwesomeIcon icon={faLock} className={styles.icon4} />
                    <input type="password" placeholder='New Password' className={styles.npassword} />
                </div>
                <button className={styles.btn1}>Update</button>
            </div>
        </div>
    )
}

export default Settings
