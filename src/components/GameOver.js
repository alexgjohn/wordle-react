import React, { useContext } from 'react'
import { AppContext } from '../App'
import Replay from './Replay';

function GameOver() {
    const { gameOver, correctWord, currAttempt } = useContext(AppContext);
    return (
        <div className="gameOver">
            <h3>{gameOver.guessedWord ? "You got it! Well done!" : "FAILURE! Better luck next time!"}</h3>
            <h1>Correct Word: {correctWord}</h1>
            {gameOver.guessedWord && (<h3>You guessed in {currAttempt.attempt} attempts</h3>)}
            <Replay/>
        </div>
    )
}

export default GameOver