import { memo, useEffect, useState } from 'react';
import styles from './LoaderLine.module.scss';

export const LoaderLine = memo(() => {
  const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     const handleLoad = () => {
  //       setLoading(false);
  //     };
  //     window.addEventListener('load', handleLoad);
  //     return () => {
  //       window.removeEventListener('load', handleLoad);
  //     };
  //   }, []);

  return (
    <div className={styles.component}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='100%'
        height='10'
        viewBox='0 0 100 10'
        preserveAspectRatio='none'
      >
        <line className={styles.line} x1='0' y1='0' x2='100' y2='0'></line>
      </svg>
    </div>
  );
});
LoaderLine.displayName = 'LoaderLine';
