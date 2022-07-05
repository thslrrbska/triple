import React from "react";
import styles from "./award_item.module.css";

const AwardItem = ({ award, award: { texts } }) => {
  return (
    <>
      <div className={styles.item}>
        <img className={styles.logo} src={award.logoPath} alt="로고" />
        <div>
          {texts.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </div>
    </>
  );
};

export default AwardItem;
