import React from 'react';
import styles from './style.scss';

const GuestList = ({className}) =>
    <div className={className || styles.GuestCardList}>
        I need to be red!
    </div>;

export default GuestList;