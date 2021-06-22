import React, { useState } from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';

const ContactsInfo = () => {
  const [emailPlaceHolder, setEmailPlaceHolder] = useState(false);
  const [phonePlaceHolder, setPhonePlaceHolder] = useState(false);
  return (
    <>
      <h2 className={classnames(styles.needMore__title, styles.title)}>
        Can we contact you for more input?
      </h2>
      <div className={styles.inputGroup}>
        {emailPlaceHolder && <small className={styles.small}>Email</small>}
        <input
          className={classnames(styles.needMore__input, styles.input)}
          placeholder='Email'
          onMouseDown={() => setEmailPlaceHolder(true)}
          onBlur={() => setEmailPlaceHolder(false)}
        />
      </div>
      <div className={styles.inputGroup}>
        {phonePlaceHolder && <small>Phone</small>}
        <input
          className={classnames(styles.needMore__input, styles.input)}
          placeholder='Phone'
          onMouseDown={() => setPhonePlaceHolder(true)}
          onBlur={() => setPhonePlaceHolder(false)}
        />
      </div>
    </>
  );
};

export default ContactsInfo;
