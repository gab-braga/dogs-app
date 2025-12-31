import React from 'react';
import styles from './Footer.module.css';
import Dogs from '../../assets/dogs-footer.svg?react';

export default () => {
  return (
    <footer className={styles.footer}>
      <Dogs />
      <p>Dog. Alguns direitos reservados.</p>
    </footer>
  );
};
