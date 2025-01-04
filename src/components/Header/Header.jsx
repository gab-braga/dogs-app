import React from 'react';
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import Dog from '../../assets/dogs.svg?react';

export default () => {
  return (
    <header className={styles.Header}>
      <nav className={[styles.nav, 'container'].join(' ')}>
        <Link className={styles.logo} to="/" aria-label="Dogs - Home">
          <Dog />
        </Link>
        <Link className={styles.login} to="/login">
          Login / Criar
        </Link>
      </nav>
    </header>
  );
};
