import React from "react";
import styles from "./Nav.module.css";

const Nav = () => {
  const options = [
    {
      id: 0,
      text: "How we work works",
    },
    {
      id: 1,
      text: "Blog",
    },
    {
      id: 2,
      text: "Account",
    },
  ];

  const listOptions = options.map((option) => {
    return (
      <li key={option.id}>
        {" "}
        <a href="#" className={styles.option}>
          {option.text}
        </a>{" "}
      </li>
    );
  });

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>{listOptions}</ul>
      <button className={styles.view_plans_btn_bar}>View plans</button>
    </nav>
  );
};

export default Nav;
