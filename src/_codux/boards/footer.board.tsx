import React from "react";
import { createBoard } from "@wixc3/react-board";
import { Footer } from "../../components/Footer";

export default createBoard({
    name: "Footer Board",
    Board: () => <Footer />,
    // isSnippet: false,
    environmentProps: {
        canvasWidth: 1054,
        windowHeight: 636,
        canvasHeight: 426,
    },
});
