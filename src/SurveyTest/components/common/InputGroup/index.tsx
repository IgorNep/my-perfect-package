import React, { useState } from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';

interface InputGroupProps {
  allowSubmitHandler: (data: number) => void;
}

const InputGroup: React.FC<InputGroupProps> = ({ allowSubmitHandler }) => {
  const maxLength = 50;
  const [charLength, setCharLength] = useState(0);
  const [text, setText] = useState('');

  return (
    <div className={styles.inputGroup}>
      <input
        className={classnames(styles.needMore__input, styles.input)}
        placeholder="Your text"
        value={text}
        onInput={(e: any) => {
          setCharLength(e.target.value.length);
        }}
        onChange={(e) => {
          if (e.target.value.length < maxLength) {
            setText(e.target.value);
          }
          allowSubmitHandler(e.target.value.length);
        }}
      />
      <small className={styles.small}>
        {charLength} / {maxLength}
      </small>
    </div>
  );
};

export default InputGroup;
