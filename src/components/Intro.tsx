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
        <h1 className={styles.title}>Humanizing your insurance.</h1>
        <p className={styles.description}>
          Get your life insurance coverage easier and faster. We blend our
          expertise and technology to help you find the plan that’s right for
          you. Ensure you and your loved ones are protected.
        </p>
        <button className={styles.view_plans_btn}>view plans</button>
      </div>
    </div>
  );
};

export default Intro;
