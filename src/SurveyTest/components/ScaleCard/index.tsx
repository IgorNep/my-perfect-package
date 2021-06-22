import React, { useState } from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';
import StarItem from './StarItem';

const stars = new Array(5).fill('');

const ScaleCard = ({ title }: { title: string }) => {
  const [currentActiveStar, setCurrentActiveStar] = useState(-1);
  return (
    <div className={styles.scaleCard}>
      <h3 className={classnames(styles.scaleCard__title, styles.title)}>
        {title}
      </h3>
      <div className={styles.scaleCard__stars}>
        {stars.map((_, index) => {
          return (
            <StarItem
              key={index}
              index={index}
              isActive={index <= currentActiveStar ? true : false}
              activeStarHandler={(indexData) => setCurrentActiveStar(indexData)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ScaleCard;
