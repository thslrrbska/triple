import React from "react";
import AwardItem from "./award_item";
import styles from "./award_list.module.css";
import cx from "classnames";

const AwardList = (props) => {
  const awards = [
    {
      logoPath: "/images/play-store2x.png",
      texts: ["2018 구글 플레이스토어", "올해의 앱 최우수상 수상"],
    },
    {
      logoPath: "/images/badge-apple4x.png",
      texts: ["2018 애플 앱스토어", "오늘의 여행앱 선정"],
    },
  ];
  return (
    <>
      <div className={cx(styles.container, props.className)}>
        {awards.map((award, index) => (
          <AwardItem award={award} key={index} />
        ))}
      </div>
    </>
  );
};

export default AwardList;
