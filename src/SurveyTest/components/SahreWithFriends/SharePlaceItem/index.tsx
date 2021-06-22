import React, { useState } from 'react';
import classnames from 'classnames';
import Button from '../../Button';
import ShareFiles from '../../ShareFiles';
import styles from './styles.module.scss';
import InputGroup from '../../common/InputGroup';

const SharePlaceItem = () => {
  const [isAddingFiles, setIsAddingFiles] = useState(false);
  const [isAllowedSubmit, setIsAllowSubmit] = useState(false);

  return (
    <>
      <h2 className={classnames(styles.title, styles.friendsShare__title)}>
        Share this place with your friends!
      </h2>
      {isAddingFiles ? (
        <>
          <InputGroup
            allowSubmitHandler={(data) => {
              if (data > 0) {
                setIsAllowSubmit(true);
              } else {
                setIsAllowSubmit(false);
              }
            }}
          />
          <div className={styles.addFiles}>
            <ShareFiles />
          </div>
        </>
      ) : (
        <div className={styles.shareImage}>
          <h3>Have a tasty day!</h3>
          <h3>Jack Rabbit</h3>
        </div>
      )}
      <Button
        onClickHandler={() => alert('Shared!')}
        title='Share'
        extraClassName={styles.sharedBtn}
        disabledBtn={!isAllowedSubmit && isAddingFiles}
      />
      {!isAddingFiles ? (
        <>
          <Button
            onClickHandler={() => setIsAddingFiles(true)}
            title='Add my text & photo'
            extraClassName={styles.addBtn}
          />
          <Button
            onClickHandler={() => console.log('Not now clicked')}
            title='Not now'
            extraClassName={styles.notNowBtn}
          />
        </>
      ) : (
        <Button
          title='Back'
          onClickHandler={() => setIsAddingFiles(false)}
          extraClassName={styles.backBtn}
        />
      )}
    </>
  );
};

export default SharePlaceItem;
