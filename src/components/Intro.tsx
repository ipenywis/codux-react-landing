import React from "react";
import styles from "./Intro.module.css";

import IntroDesktop from "../images/image-intro-desktop.jpg";
import IntroMobile from "../images/image-intro-mobile.jpg";

const Intro = () => {
    return (
      <div className={styles.intro}>
        <picture className={styles.intro_img}>
          <source srcSet={IntroDesktop} media="(min-width: 1024px)" />
          <img src={IntroMobile} alt="" aria-hidden="true" />
        </picture>
        <div className={styles.intro_content}>
          <h1 className={styles.title}>Make Your Docs Smart with AI</h1>
          <p className={styles.description}>
            Level up your Editing and Writing skills on PDF, Docs and papers a
            lot more accurate and more clever using our Top tier AI Model
          </p>
          <button className={styles.view_plans_btn}>view plans</button>
        </div>
      </div>
    );
};

export default Intro;
