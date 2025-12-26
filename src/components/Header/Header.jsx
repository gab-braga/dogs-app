import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import Dog from '../../assets/dogs.svg?react';
import { useAuth } from '../../context/AuthContext';

export default () => {
  const { logged, user } = useAuth();

  return (
    <header className={styles.header}>
      <nav className={[styles.nav, 'container'].join(' ')}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <Dog />
        </Link>
        
        {logged ? (
          <Link to="/p/conta" className={styles.login}>
          {user.nome}
        </Link>
        ) : (
        <Link to="/login" className={styles.login}>
          Login / Criar
        </Link>
      )}
      </nav>
    </header>
  );
};
