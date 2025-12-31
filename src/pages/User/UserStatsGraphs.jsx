import { useEffect, useState } from "react";
import styles from "./UserStatsGraphs.module.css";

export default ({ data }) => {
  const [graph, setGraph] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    console.log(data)
    setGraph();
    setTotal(
      data
        .map(({ acessos }) => acessos)
        .reduce((a, b) => a + b, 0)
    );
  }, [data]);

  return (
    <section className={`${styles.graph} animeLeft`}>
      <div>
        <p className={styles.total}>
          Acessos: {total}
        </p>
      </div>
    </section>
  );
}