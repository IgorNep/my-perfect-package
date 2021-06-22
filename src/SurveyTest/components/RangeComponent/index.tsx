import React, { useState } from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';

const RangeComponent = () => {
  const [currentRate, setCurrentRate] = useState('6');

  const onInputHandler = (e: any) => {
    e.target.style.background =
      'linear-gradient(to right, #ffa188 0%, #ffa188 ' +
      e.target.value * 10 +
      '%, #d3dfeb ' +
      e.target.value * 10 +
      '%, #d3dfeb 100%)';
  };
  return (
    <>
      {' '}
      <h2 className={classnames(styles.range__title, styles.title)}>
        On a scale of 0 to 10, how likely are you to recommend us to a friend or
        family member?
      </h2>
      <div className={styles.rangeWrapper}>
        <div
          className={styles.rangeIconValue}
          style={{ left: `${20 * Number(currentRate)}px` }}
        >
          {currentRate}
        </div>
        <div className={styles.rangeSteps}>
          <span className={styles.rangeText}>1</span>
          <input
            type='range'
            id='scale-recommend'
            name='scale-recommend'
            min='1'
            max='10'
            value={currentRate}
            className={styles.rangeSlider}
            onChange={(e) => setCurrentRate(e.target.value)}
            onInput={(e) => onInputHandler(e)}
          />
          <span className={styles.rangeText}>10</span>
        </div>
      </div>
      <div className={styles.rangeComments}>
        <span className={styles.rangeComment}>not at all likely</span>
        <span className={styles.rangeComment}>extremely likely</span>
      </div>
    </>
  );
};

export default RangeComponent;
