import styles from './History.module.css';

function History() {
  return (
    <div className={styles.back_container}>
      <button onClick={() => window.history.go(-1)}>back by go</button>
      <button onClick={() => window.history.back()}>back by back</button>
    </div>
  );
}

export default History;
