import React from "react";
import styles from "./Features.module.css";

import SnappyProcess from "../images/icon-snappy-process.svg";
import IconPrices from "../images/icon-affordable-prices.svg";
import IconPeople from "../images/icon-people-first.svg";

// eslint-disable-next-line react/prop-types
function IconTitleText({ icon, title, text }: any) {
  return (
    <div className={styles.feature}>
      <img src={icon} alt="" aria-hidden="true" className={styles.icon} />
      <p className={styles.subtitle}>{title}</p>
      <p className={styles.description}>{text}</p>
    </div>
  );
}

export const Features = () => {
  return (
    <section className={styles.features}>
      <h2 className={styles.title}>We're different</h2>
      <div className={styles.wrapper}>
        <IconTitleText
          icon={SnappyProcess}
          title={"Snappy Process"}
          text={
            "Our application process can be completed in minutes. Don't get stuck filling in tedious forms."
          }
        />
        <IconTitleText
          icon={IconPrices}
          title={"Affordable Prices"}
          text={
            "We don't want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible."
          }
        />
        <IconTitleText
          icon={IconPeople}
          title={"People First"}
          text={
            "Our plans aren't full of conditions and clauses to prevent payouts. We make sure you're covered when you need it."
          }
        />
      </div>
    </section>
  );
};
