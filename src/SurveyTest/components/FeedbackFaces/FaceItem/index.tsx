import React, { useEffect, useState } from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';

interface FaceTypeProps {
  title: string;
  isActive: Boolean;
}

interface FaceItemProps {
  faceType: FaceTypeProps;
  faceClickHandler: () => void;
}

const FaceItem: React.FC<FaceItemProps> = ({ faceType, faceClickHandler }) => {
  const [isActive, setIsActive] = useState(faceType.isActive);

  return (
    <div
      className={classnames(
        styles.faces__item,
        isActive && styles.faces__item_active
      )}
      onClick={() => {
        setIsActive(!isActive);
        faceClickHandler();
      }}
    >
      <div
        className={classnames(
          styles.faces__img,
          styles[`faces__img_${faceType.title}`],
          isActive && styles[`faces__img_${faceType.title}_active`]
        )}
      ></div>
      <p
        className={classnames(
          styles.faces__text,
          isActive && styles.faces__text_active
        )}
      >
        {faceType.title}
      </p>
    </div>
  );
};

export default FaceItem;
