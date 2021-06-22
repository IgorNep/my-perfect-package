import React from 'react';
import classnames from 'classnames';
import styles from './styles.module.scss';

interface ButtonProps {
  title?: string;
  extraClassName?: string;
  onClickHandler: () => void;
  disabledBtn?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  title = 'Send',
  extraClassName,
  onClickHandler,
  disabledBtn = false,
}) => {
  const generalStyles = classnames(
    styles.button,
    extraClassName && extraClassName
  );
  return (
    <button
      className={generalStyles}
      onClick={onClickHandler}
      disabled={disabledBtn}
      style={
        disabledBtn
          ? { opacity: '0.5', cursor: 'default' }
          : { cursor: 'pointer' }
      }
    >
      {title}
    </button>
  );
};

export default Button;
