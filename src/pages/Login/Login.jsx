import React from 'react';
import styles from './Login.module.css';
import { Outlet } from 'react-router-dom';

export default () => {
  return (
    <div className={styles.Login}>
      <Outlet />
    </div>
  );
};
