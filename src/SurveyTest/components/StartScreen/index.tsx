import React from 'react';
import logo from '../../assets/img/start_screen/logo-catch-feedback.png';
import styles from './styles.module.scss';

const StartScreen = () => {
  return (
    <div className={styles.startScreen}>
      <img src={logo} alt="logo" />
    </div>
  );
};

export default StartScreen;
