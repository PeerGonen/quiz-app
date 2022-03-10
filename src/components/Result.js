import React from "react";

/* This folder is responsible for the displayed result after the user answers all the questions.
And on the button that will reset the QuizBee to start */
const Result = ({score, playAgain}) => (
    <div className="score-board">
        <div className="score">You scored {score} / 5 correct answers!</div>
        <button className="playBtn" onClick={playAgain}>
            Play again!
            </button>
        </div>
);

export default Result;