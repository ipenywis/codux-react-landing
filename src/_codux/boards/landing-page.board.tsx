import React from "react";
import { createBoard } from "@wixc3/react-board";
import App from "../../App";

export default createBoard({
    name: "App Board",
    Board: () => <App />,
    environmentProps: {
        windowHeight: 2229,
        windowWidth: 1658,
        canvasWidth: 2208,
        canvasHeight: 1903
    },
    isSnippet: true
});
