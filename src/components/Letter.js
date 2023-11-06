import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../App";

function Letter({ letterPos, attemptVal }) {
    const {
    board,
    correctWord,
    currAttempt,
    disabledLetters,
    setDisabledLetters,
    } = useContext(AppContext);
    const letter = board[attemptVal][letterPos];

    const correct = correctWord.toUpperCase()[letterPos] === letter;
    const letterCountInCorrectWord = correctWord
        .toUpperCase()
        .split("")
        .filter((char) => char === letter).length;

    const isLetterPresent = letterCountInCorrectWord > 0;
    const isLetterCorrect = correct;
    const isAlmost = isLetterPresent && !isLetterCorrect;

  // Track letter states and positions
    const letterState =
        currAttempt.attempt > attemptVal &&
        (isLetterCorrect
        ? "correct"
        : isAlmost
        ? "almost"
        : "error");

    useEffect(() => {
        if (letter !== "" && !isLetterCorrect && !isAlmost) {
        setDisabledLetters((prev) => [...prev, letter]);
        }
    }, [currAttempt.attempt]);

    return (
        <div className="letter" id={letterState}>
        {letter}
        </div>
    );
}

export default Letter;
