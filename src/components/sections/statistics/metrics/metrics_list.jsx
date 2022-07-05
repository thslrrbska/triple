import React from "react";
import MetricsItem from "./metrics_item";
import styles from "./metrics_list.module.css";

const MetricsList = (props) => {
  const metricses = [
    {
      mainText: "700만 명",
      subText: "의 여행자",
    },
    {
      mainText: "100만 개",
      subText: "의 여행 리뷰",
    },
    {
      mainText: "470만 개",
      subText: "의 여행 일정",
    },
  ];
  return (
    <>
      <div className={styles.container}>
        {metricses.map((metrics, index) => (
          <MetricsItem metrics={metrics} key={index} />
        ))}
      </div>
    </>
  );
};

export default MetricsList;
