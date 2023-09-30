import React from "react";
import Nav from "./Nav";
import { useState } from "react";
import styles from "./Bar.module.css";
import Logo from "../images/logo.svg";
import HamburgerIcon from "../images/icon-hamburger.svg";
import CloseIcon from "../images/icon-close.svg";

const Bar = () => {
  const [icon, setIcon] = useState(HamburgerIcon);

  function handleClick(e: React.ChangeEvent<any>) {
    e.target.getAttribute("src").includes("hamburger")
      ? setIcon(CloseIcon)
      : setIcon(HamburgerIcon);
    document.querySelector("nav")?.classList.toggle(styles.open);
    document.body.classList.toggle("lockScroll");
  }

  return (
    <div className={styles.top_bar}>
      <img src={Logo} alt="insure logo" />
      <Nav />
      <button
        className={styles.menu_btn}
        onClick={(e) => {
          handleClick(e);
        }}
      >
        <img src={icon} alt="hamburger icon" />
      </button>
    </div>
  );
};

export default Bar;
