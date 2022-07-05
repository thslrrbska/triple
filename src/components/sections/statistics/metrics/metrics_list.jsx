import React from "react";
import MetricsItem from "./metrics_item";
import styles from "./metrics_list.module.css";
import cx from "classnames";

const MetricsList = (props) => {
  const metricses = [
    {
      count: 700,
      mainText: "만 명",
      subText: "의 여행자",
    },
    {
      count: 100,
      mainText: "만 개",
      subText: "의 여행 리뷰",
    },
    {
      count: 470,
      mainText: "만 개",
      subText: "의 여행 일정",
    },
  ];
  return (
    <>
      <div className={cx(styles.container, props.className)}>
        {metricses.map((metrics, index) => (
          <MetricsItem metrics={metrics} key={index} />
        ))}
      </div>
    </>
  );
};

export default MetricsList;
