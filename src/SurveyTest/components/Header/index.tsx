import React from 'react';
import logo from '../../assets/img/logo.png';
import form from '../../assets/img/form.svg';
import LangList from '../LangList';
import styles from './styles.module.scss';

const langList = ['En', 'Fr', 'Ua'];

interface HeaderPropTypes {
  isActive: Boolean;
}

const Header: React.FC<HeaderPropTypes> = ({ isActive }) => {
  return (
    <div className={styles.header}>
      <LangList list={langList} />
      <div className={styles.headerTitle}>
        {!isActive && (
          <div className={styles.logoWrapper}>
            <img src={logo} alt='logo' className={styles.headerTitle__logo} />
          </div>
        )}
        <h3 className={styles.headerTitle__big}>Jack Rabbit</h3>
        {!isActive && (
          <p className={styles.headerTitle__small}>
            119 Newport Ave. Santee, CA
          </p>
        )}
      </div>
      <img src={form} alt='form' className={styles.form} />
    </div>
  );
};

export default Header;
