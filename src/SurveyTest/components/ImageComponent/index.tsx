import React from 'react';
import deleteIcon from '../../assets/img/sharing_with_friends/icon-delete-photo.png';
import imageLink from '../../assets/img/sharing_with_friends/cafe-image-1.jpg';
import styles from './styles.module.scss';

interface ImageComponentProps {
  imageSrc?: string;
  onClickDeleteHandler: () => void;
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  imageSrc = imageLink,
  onClickDeleteHandler,
}) => {
  return (
    <div className={styles.imgWrapper}>
      <img
        src={deleteIcon}
        alt='delete'
        className={styles.deleteIcon}
        onClick={onClickDeleteHandler}
      />
      <img src={imageSrc} alt='uploaded-img' className={styles.uploadedImg} />
    </div>
  );
};

export default ImageComponent;
