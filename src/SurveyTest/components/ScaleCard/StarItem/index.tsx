import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';

interface StarItemProps {
  index: number;
  isActive?: boolean;
  activeStarHandler: (index: number) => void;
}
const StarItem: React.FC<StarItemProps> = ({
  index,
  isActive,
  activeStarHandler,
}) => {
  return (
    <>
      <div
        className={classnames(styles.star, isActive && styles.star_active)}
        onClick={() => activeStarHandler(index)}
      ></div>
    </>
  );
};

export default StarItem;
