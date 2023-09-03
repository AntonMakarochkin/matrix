import React, { useState, useEffect } from "react";

import styles from "./LocalSessionStorage.module.css";

function LocalSessionStorage({ className }) {

  const [localCounter, setLocalCounter] = useState(0); // Доступ через объект

  const [sessionCounter, setSessionCounter] = useState(0); // Доступ через методы

  useEffect(() => {
    if (localStorage.localCounter) {
      setLocalCounter(Number(localStorage.localCounter));
    }
    if (sessionStorage.getItem("sessionCounter")) {
      setSessionCounter(Number(sessionStorage.getItem("sessionCounter")));
    }
  }, []);

  const incrementLocal = () => {
    setLocalCounter(Number(localCounter) + 1);
  };

  const decrementLocal = () => {
    setLocalCounter(Number(localCounter) - 1);
  };
  const incrementSession = () => {
    setSessionCounter(Number(sessionCounter) + 1);
  };

  const decrementSesion = () => {
    setSessionCounter(Number(sessionCounter) - 1);
  };

  function connectDB(){
    const request = indexedDB.open('filesBase', 1);
    request.onerror = (event) => {
      console.log(event);
    };
    request.onsuccess = () => {
      let db = request.result;
      const transition = db.transaction('fileStore', "readwrite");
      let store = transition.objectStore("fileStore");
      store.add({
        id: localCounter,
        price: 100,
        created: new Date()
      })
    };
    request.onupgradeneeded = function(e){
      e.currentTarget.result.createObjectStore('fileStore', { keyPath: "id" });
    }
  }
  return (
    <div className={[className, "storage"].join(" ")}>
      <div className={styles.block}>
        <div>Локальный счетчик: {localCounter}</div>
        <div className={styles.handler__buttons}>
          <button onClick={incrementLocal}>+1</button>
          <button onClick={decrementLocal}>-1</button>
        </div>
        <button
          className={styles.save}
          onClick={() => (localStorage.localCounter = localCounter)}
        >
          save
        </button>
        <button
          className={styles.save}
          onClick={() => delete localStorage.localCounter}
        >
          reset
        </button>
      </div>

      <div className={styles.block}>
        <div>Счетчик сессии: {sessionCounter}</div>
        <div className={styles.handler__buttons}>
          <button onClick={incrementSession}>+1</button>
          <button onClick={decrementSesion}>-1</button>
        </div>
        <button
          className={styles.save}
          onClick={() => sessionStorage.setItem("sessionCounter", sessionCounter)}
        >
          save
        </button>
        <button
          className={styles.save}
          onClick={() => sessionStorage.removeItem("sessionCounter")}
        >
          reset
        </button>
      </div>
        <button
          className={styles.indexedDB}
          onClick={() => connectDB()}
        >
          Добавить объект в indexedDB
        </button>
    </div>
  );
}

export default LocalSessionStorage;
