import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import Dog from '../../assets/dogs.svg?react';
import { useAuth } from '../../context/AuthContext';

export default () => {
  const { logged, logout } = useAuth();

  return (
    <header className={styles.Header}>
      <nav className={[styles.nav, 'container'].join(' ')}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <Dog />
        </Link>
        {logged && <button onClick={logout}>Sair</button>}
        <Link className={styles.login} to="/login">
          Login / Criar
        </Link>
      </nav>
    </header>
  );
};
