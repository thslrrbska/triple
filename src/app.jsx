import React from "react";
import StatisticsSection from "./components/sections/statistics/statistics_section";
import styles from "./app.module.css";

const app = (props) => {
  return (
    <>
      <div className={styles.wrapper}>
        <StatisticsSection />
      </div>
    </>
  );
};

export default app;
