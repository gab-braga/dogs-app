import { useState } from "react";
import styles from "./Image.module.css";

export default ({ src, alt }) => {
  const [skeleton, setSkeleton] = useState(true);

  function handleLoad({ target }) {
    setSkeleton(false);
    target.style.opacity = 1;
  }

  return (
    <div className={styles.wrapper}>
      {skeleton && <div className={styles.skeleton}></div>}
      <img
        src={src} alt={alt}
        className={styles.img}
        onLoad={handleLoad}
      />
    </div>
  );
}