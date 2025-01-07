import React from 'react';
import styles from './Button.module.css';

export default ({ children, ...props }) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
};
