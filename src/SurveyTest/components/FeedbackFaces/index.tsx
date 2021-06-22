import React from 'react';
import styles from './styles.module.scss';
import FaceItem from './FaceItem';

let faceTypes = [
  { title: 'awful', isActive: false },
  { title: 'bad', isActive: false },
  { title: 'ok', isActive: false },
  { title: 'good', isActive: false },
  { title: 'wow', isActive: false },
];

const FeedbackFaces = ({ faceClickHandler }: any) => {
  return (
    <div className={styles.feelings}>
      <h2 className={styles.feelings__title}>How do you feel about us?</h2>
      <div className={styles.faces}>
        {faceTypes.map((fType, index) => (
          <FaceItem
            key={index}
            faceType={fType}
            faceClickHandler={faceClickHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default FeedbackFaces;
