import React from 'react';
import styles from './style.scss';
import GuestList from "./GuestList/GuestList.jsx";

const App = () =>
    <GuestList className={styles.ModifiedGuestList}></GuestList>;

export default App;