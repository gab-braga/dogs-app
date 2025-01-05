import React from 'react';
import styles from './Input.module.css';

export default ({ name, label, type }) => {
  return (
    <div className={styles.wrapper}>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input className={styles.Input} id={name} name={name} type={type} />
      <p className={styles.error}>Erro</p>
    </div>
  );
};
