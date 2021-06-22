import React from 'react';
import logo from '../../assets/img/finish_screen/logo-face.png';
import styles from './styles.module.scss';

interface FinishScreenProps {
  title: string;
}

const FinishScreen: React.FC<FinishScreenProps> = ({ title }) => {
  return (
    <div className={styles.finishScreen}>
      <img src={logo} alt='logo' />
      <h3 className={styles.screenTitle}>{title}</h3>
    </div>
  );
};

export default FinishScreen;
