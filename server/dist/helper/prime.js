"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameStatus = void 0;
const gameStatus = () => {
    const winNumber = [0];
    for (let idx = 0; idx < 4; idx++) {
        winNumber[idx] = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    }
    const randomNumber = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    if (winNumber.length > 0 && winNumber.includes(randomNumber))
        return { win: true };
    return { win: false };
};
exports.gameStatus = gameStatus;
