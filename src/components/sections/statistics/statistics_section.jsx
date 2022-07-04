import React from "react";
import AwardList from "./award/award_list";
import MetricsList from "./metrics/metrics_list";
import styles from "./statistics_section.module.css";

const StatisticsSection = (props) => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.logo}>
          <span className={styles.logo_content}>2021년 12월 기준</span>
        </div>
        <div className={styles.content}>
          <MetricsList />
          <AwardList />
        </div>
      </section>
    </>
  );
};

export default StatisticsSection;
