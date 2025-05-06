import React from 'react';
import styles from "./PopupForm.module.css"

const PopupForm = () => {
    return (
        <div className={styles.total}>
            <div className={styles.form}>
                <label className={styles.title} >Title<span>*</span>
                    <input type="task" placeholder='Enter task tittle' />
                </label>
                <label>Select Priority<span>*</span>
                    <div>High Priority</div>
                    <div>Moderate Priority</div>
                    <div>Low Priority</div>
                </label>
                <label>Checklist<button type="button" className={styles.addNewButton}>Add new</button></label>
                <label>
                    <button>Select Due Date</button>
                    <button>Cancel</button>
                    <button>Save</button>
                </label>
            </div>
        </div >
    )
}

export default PopupForm

