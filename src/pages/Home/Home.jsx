import React from 'react';
import styles from './Home.module.css';
import Feed from '../Feed/Feed';

export default () => {
  return (
    <div
      className="container"
      style={{ marginTop: "4rem" }}
    >
      <Feed />
    </div>
  );
};
