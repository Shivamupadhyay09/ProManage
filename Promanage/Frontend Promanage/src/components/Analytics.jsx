import React from 'react';
import styles from "./Analytics.module.css";

const Analytics = () => {
    return (
        <div className={styles.analytics}>
            <div className={styles.header}>Analytics</div>
            <div className={styles.data}>
                <div className={styles.tasks}>
                    <ul>
                        <li>Backlog Tasks</li>
                        <li>To-do Tasks</li>
                        <li>In-Progress Tasks</li>
                        <li>Completed Tasks</li>
                    </ul>
                </div>
                <div className={styles.priorities}>
                    <ul>
                        <li>Low Priority</li>
                        <li>Moderate Priority</li>
                        <li>High Priority</li>
                        <li>Due Date Tasks</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Analytics;
