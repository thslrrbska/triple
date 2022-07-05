import React, { useEffect } from "react";
import AwardList from "./award/award_list";
import MetricsList from "./metrics/metrics_list";
import styles from "./statistics_section.module.css";
import cx from "classnames";

const StatisticsSection = (props) => {
  const className = "fade";
  useEffect(() => {
    const nodeList = document.querySelectorAll(
      `.${styles.container} .${className}`
    );
    const DELAY = 300;
    let wait = DELAY;
    for (const node of nodeList) {
      setTimeout(() => {
        node.classList.replace("fade", "fade-active");
      }, wait);
      wait += DELAY;
    }
  }, []);
  return (
    <>
      <section className={styles.container}>
        <div className={cx(styles.logo, className)}>
          <span className={styles.logo_content}>2021년 12월 기준</span>
        </div>
        <div className={styles.content}>
          <MetricsList className={className} />
          <AwardList className={className} />
        </div>
      </section>
    </>
  );
};

export default StatisticsSection;
