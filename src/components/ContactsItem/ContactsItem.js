import React from 'react';
import styles from './ContactsItem.module.css'

const ContactsItem = ({name, number, onRemove})=>(
    <li className={styles.item}>
        <p 
        className={styles.name}>
            {name}-{number}</p>
        <button 
            className={styles.button}
            onClick={onRemove}> 
            Delete
        </button>
    </li>
 ) ;
export default ContactsItem;
    
