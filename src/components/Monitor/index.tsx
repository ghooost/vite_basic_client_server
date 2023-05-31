import { useRef, useState } from 'react';
import styles from './styles.module.css';

export function Monitor() {
  const [out, setOut] = useState('');
  const inp = useRef<HTMLTextAreaElement>(null);
  const handleSend = async () => {
    const {VITE_PORT: port = 5000} = import.meta.env;
    const outp = await (await fetch(`http://localhost:${port}/ql`)).json();
    setOut(JSON.stringify(outp, null, 2));
  };

  return (
    <div className={styles.root}>
      <textarea ref={inp}></textarea>
      <button onClick={handleSend}>Send</button>
      <textarea value={out} readOnly/>
    </div>
  );
}