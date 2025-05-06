import React, { useState } from 'react';
import Board from "../components/Board";
import Analytics from "../components/Analytics";
import Settings from "../components/Settings";
import styles from './Dashboard.module.css';

const Dashboard = () => {
    // const [activeComponent, setActiveComponent] = useState("Board");
    // const renderActiveComponent = () => {
    //     switch (activeComponent) {
    //         case "Board":
    //             return <Board />;
    //         case "Analytics":
    //             return <Analytics />;
    //         case "Settings":
    //             return <Settings />;
    //         default:
    //             return <Board />;
    //     }
    // };
    return (
        <div className={styles.main}>
            <div className={styles.left}>
                <div className={styles.containerl}>
                    <img className={styles.logo} src="/assets/codesandbox.png" alt="logo" />
                    <p className={styles.p1}>Pro Manage</p>
                </div>
                <div className={styles.container}>
                    <img className={styles.board} src="/assets/layout.png" alt="layout icon" />
                    <p className={styles.boardp}>Board</p>
                </div>
                <div className={styles.container}>
                    <img className={styles.analytics} src="/assets/database.png" alt="database icon" />
                    <p className={styles.analyticsp}>Analytics</p>
                </div>
                <div className={styles.container}>
                    <img className={styles.settings} src="/assets/settings.png" alt="settings icon" />
                    <p className={styles.settingsp}>Settings</p>
                </div>
            </div>
            <div className={styles.right}>
                {/* {renderActiveComponent()} */}
                <Board />
                {/* <Analytics /> */}
                {/* <Settings /> */}
            </div>
        </div >
    )
}

export default Dashboard
