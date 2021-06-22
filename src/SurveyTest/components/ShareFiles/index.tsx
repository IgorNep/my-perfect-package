import React, { useState } from 'react';
import classnames from 'classnames';
import ImageComponent from '../ImageComponent';
import styles from './styles.module.scss';

const ShareFiles = () => {
  const [photoLoad, setPhotoLoad] = useState(false);
  const [photoDone, setPhotoDone] = useState(false);
  const [audioLoad, setAudioLoad] = useState(false);
  const [audioDone, setAudioDone] = useState(false);

  const onClickDeleteHandler = () => {
    setPhotoDone(false);
  };

  const photoLoadHandler = () => {
    setPhotoLoad(true);

    setTimeout(() => {
      setPhotoLoad(false);
      setPhotoDone(true);
    }, 2000);
  };

  const audioLoadHandler = () => {
    setAudioLoad(true);

    setTimeout(() => {
      setAudioLoad(false);
      setAudioDone(true);
    }, 2000);
  };
  return (
    <>
      <div className={styles.shareFiles}>
        <div
          className={classnames(
            styles.shareFiles__item,
            photoLoad && styles.shareFiles__item_load,
            photoDone && styles.shareFiles__item_done
          )}
          onClick={photoLoadHandler}
        >
          <div className={styles.shareFiles__overlay}>
            <div className={styles.loader}></div>
            <div
              className={classnames(
                styles.shareFiles__icon,
                styles.shareFiles__icon_photo
              )}
            ></div>
          </div>
          <div className={styles.shareFiles__text}>
            {photoLoad
              ? 'uploading...'
              : photoDone
              ? 'photo added'
              : 'add photo'}
          </div>
        </div>
        <div
          className={classnames(
            styles.shareFiles__item,
            audioLoad && styles.shareFiles__item_load,
            audioDone && styles.shareFiles__item_done
          )}
          onClick={audioLoadHandler}
        >
          <div className={styles.shareFiles__overlay}>
            <div className={styles.loader}></div>
            <div
              className={classnames(
                styles.shareFiles__icon,
                styles.shareFiles__icon_audio
              )}
            ></div>
          </div>
          <div className={styles.shareFiles__text}>
            {' '}
            {audioLoad
              ? 'uploading...'
              : audioDone
              ? 'audio added'
              : 'add audio'}
          </div>
        </div>
      </div>
      {photoDone && (
        <ImageComponent onClickDeleteHandler={onClickDeleteHandler} />
      )}
    </>
  );
};

export default ShareFiles;
