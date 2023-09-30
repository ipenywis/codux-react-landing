import React from "react";
import { createBoard } from "@wixc3/react-board";
import App from "../../App";

export default createBoard({
    name: "App Board",
    Board: () => <App />,
    environmentProps: {
        windowHeight: 1301,
        windowWidth: 1700,
        canvasWidth: 2208,
        canvasHeight: 1899
    },
});
