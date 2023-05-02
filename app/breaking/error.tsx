
'use client';
/*
error.js will act as an error boundary in case any error occurs either inside of this component or any components in its subtree:

Notice that this is also a client component. Two props are passed to this component: the error prop provides more details about the error, and the reset function resets the error boundary. This should be enough to contain the error only to the component and preserve the UI as well as the state of the rest of the application.
*/
import { useEffect } from 'react';
import styles from './breaking.module.css';

export default function Error({
  error,
  reset,
} : {
    error: Error,
    reset: () => void,
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className={styles.error}>
      <div>ERROR</div>
      <p>Something went wrong!</p>
      <button onClick={() => reset()}>Reset error boundary</button>
    </div>
  );
}