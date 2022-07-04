import React from "react";
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
          <div className={styles.award_container}>
            <div className={styles.award_item}>
              <img src="/images/play-store2x.png" alt="로고" />
              <div>
                <p>2018 구글 플레이스토어</p> <p>올해의 앱 최우수상 수상</p>
              </div>
            </div>
            <div className={styles.award_item}>
              <img src="/images/badge-apple4x.png" alt="로고" />
              <div>
                <p>2018 애플 앱스토어</p> <p>오늘의 여행앱 선정</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StatisticsSection;
