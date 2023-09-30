import React from "react";
import Intro from "./components/Intro";
import Bar from "./components/Bar";
import { Features } from "./components/Features";
import Findout from "./components/Findout";
import { Footer } from "./components/Footer";
import "./index.css";

function App() {
  return (
    <>
      <header>
        <Bar />
        <Intro />
      </header>
      <main>
        <Features />
        <Findout />
      </main>
      <Footer />
    </>
  );
}

export default App;
