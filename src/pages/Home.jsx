import React from 'react';
import styles from '../App.module.scss';

function Home() {
  return (
    <div>
      <h1>Добро пожаловать в наш Store</h1>
      <div
        style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}
      >
        <div className={styles.card}>
          <h3>Товар 1</h3>
          <p>Описание товара</p>
        </div>
        <div className={styles.card}>
          <h3>Товар 2</h3>
          <p>Описание товара</p>
        </div>
        <div className={styles.card}>
          <h3>Товар 3</h3>
          <p>Описание товара</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
