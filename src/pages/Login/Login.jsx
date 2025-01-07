import React from 'react';
import styles from './Login.module.css';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default () => {
  const { logged } = useAuth();

  if (logged) return <Navigate to="/" />;

  return (
    <div className={styles.login}>
      <Outlet />
    </div>
  );
};
