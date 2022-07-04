import React from "react";
import styles from "./metrics_item.module.css";

const MetricsItem = ({ metrics }) => {
  return (
    <>
      <div className={styles.item}>
        <strong>{metrics.mainText}</strong>
        {metrics.subText}
      </div>
    </>
  );
};

export default MetricsItem;
