import React from 'react';
import styles from './Login.module.scss';

export default function Login() {
  return (
    <div className={styles.container}>
      <h1>Вход</h1>
      <form className={styles.form}>
        <input className={styles.input} type="text" placeholder="Логин" />
        <input className={styles.input} type="password" placeholder="Пароль" />
        <button className={styles.button} type="submit">
          Войти
        </button>
      </form>
    </div>
  );
}
