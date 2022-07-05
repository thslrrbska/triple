import React from "react";
import CountAnimation from "../../../animations/count_animation";
import styles from "./metrics_item.module.css";

const MetricsItem = ({ metrics }) => {
  return (
    <>
      <div className={styles.item}>
        <strong>
          <CountAnimation end={metrics.count} />
          {metrics.mainText}
        </strong>
        {metrics.subText}
      </div>
    </>
  );
};

export default MetricsItem;
