import React from 'react';
import styles from './Home.module.css';
import Feed from '../Feed/Feed';
import Head from '../../components/Helper/Head/Head';

export default () => {
  return (
    <div
      className="container"
      style={{ marginTop: "4rem" }}
    >
      <Head title="Fotos" description="Feed de fotos." />
      <Feed global />
    </div>
  );
};
