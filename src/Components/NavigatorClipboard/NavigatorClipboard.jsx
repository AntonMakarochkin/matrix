import React, { useState } from "react";
import styles from './NavigatorClipboard.module.css';

function NavigatorClipboard() {
  
  const [copy, setCopy] = useState("Текст");

  async function handleCopyImage() {
    const response = await fetch('logo512.png');
    const blob = await response.blob();
    await navigator.clipboard.write([ new ClipboardItem({ 'image/png' : blob})])  // активно используемые types: 'text/plain', 'text/html', 'text/html' 'image/jpeg'
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText('Ссылка').then(() => console.log('Успешно!'));
  };

  const handleCopyInput = () => {
    navigator.clipboard.readText().then((e) => setCopy(e))
  };
 

  return (
    <div className={styles.root}>
      <button onClick={handleCopyImage}>Скопировать картинку</button>
      <button onClick={handleCopyLink}>Скопировать ссылку</button>
      <button onClick={handleCopyInput}>Скопировать из буфера обмена</button>
      <div>{copy}</div>
    </div>
  );
}

export default NavigatorClipboard;
