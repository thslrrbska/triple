import React from "react";
import AwardList from "./award/award_list";
import styles from "./statistics_section.module.css";

const StatisticsSection = (props) => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.logo}>
          <span className={styles.logo_content}>2021년 12월 기준</span>
        </div>
        <div>
          <div className={styles.metrics_container}>
            <div className={styles.metrics_item}>
              <strong>700만 명</strong>의 여행자
            </div>
            <div className={styles.metrics_item}>
              <strong>100만 개</strong>의 여행 리뷰
            </div>
            <div className={styles.metrics_item}>
              <strong>470만 개</strong>의 여행 일정
            </div>
          </div>
          <AwardList />
        </div>
      </section>
    </>
  );
};

export default StatisticsSection;
