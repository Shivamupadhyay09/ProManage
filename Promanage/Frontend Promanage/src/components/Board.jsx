import React, { useState } from 'react';
import styles from "./Board.module.css";
import PopupForm from './PopupForm';

const Dashboard = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
        <div className={styles.board}>
            <div className={styles.top}></div>
            <div className={styles.body}>
                <div className={styles.backlog}>
                    <div>Backlog</div>
                    <img className={styles.collapse1} src="/assets/codicon_collapse-all.png" />
                </div>
                <div className={styles.todo}>
                    <div>To do</div>
                    <div className={styles.pics}>
                        <img className={styles.plus} src="/assets/Group 10.png" onClick={openModal} />
                        <img className={styles.collapse} src="/assets/codicon_collapse-all.png" />
                    </div>
                </div>
                <div className={styles.backlog}>
                    <div>In progress</div>
                    <img className={styles.collapse1} src="/assets/codicon_collapse-all.png" />
                </div>
                <div className={styles.backlog}>
                    <div>Done</div>
                    <img className={styles.collapse1} src="/assets/codicon_collapse-all.png" />
                </div>
            </div>
            {isModalOpen && <PopupForm closeModal={closeModal} />}
        </div>
    )
}

export default Dashboard;
