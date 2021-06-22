import React, { useState } from 'react';
import classnames from 'classnames';
import Button from '../Button';
import SharePlaceItem from './SharePlaceItem';
import styles from './styles.module.scss';

const ShareWithFriends = () => {
  const [notNow, setNotNow] = useState(false);
  return (
    <>
      {!notNow && (
        <>
          <h2 className={classnames(styles.title, styles.friendsShare__title)}>
            Share a free coffee to your friends!
          </h2>
          <div className={styles.shareImage}>
            <h3>Free Coffee</h3>
            <h3>Jack Rabbit</h3>
          </div>
          <Button
            onClickHandler={() => console.log('Shared clicked')}
            title='Share'
            extraClassName={styles.sharedBtn}
          />
          <Button
            onClickHandler={() => setNotNow(true)}
            title='Not now'
            extraClassName={styles.notNowBtn}
          />
        </>
      )}
      {notNow && <SharePlaceItem />}
    </>
  );
};

export default ShareWithFriends;
