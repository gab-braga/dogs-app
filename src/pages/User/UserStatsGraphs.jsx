import { useEffect, useState } from "react";
import {
  VictoryPie,
  VictoryBar,
  VictoryChart,
} from "victory";
import styles from "./UserStatsGraphs.module.css";

export default ({ data }) => {
  const [graph, setGraph] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      data
        .map(({ acessos }) => acessos)
        .reduce((a, b) => a + b, 0)
    );
    setGraph(data.map(item => {
      return {
        x: item.title,
        y: Number(item.acessos),
      };
    }));
  }, [data]);

  return (
    <section className={`${styles.graph} animeLeft`}>
      <div className={`${styles.total} ${styles.item}`}>
        <p>
          Acessos: {total}
        </p>
      </div>

      <div className={styles.item}>
        <VictoryPie
          data={graph}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: { fillOpacity: 0.9, stroke: '#ffffff', strokeWidth: 2 },
            labels: { fontSize: 14, fill: "#333333" }
          }}
        />
      </div>

      <div className={styles.item}>
        <VictoryChart>
          <VictoryBar
            data={graph}
            alignment="start"
          />
        </VictoryChart>
      </div>
    </section>
  );
}