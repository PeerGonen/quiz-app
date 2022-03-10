import React, { useState } from "react";

/* In this folder we will create what will be displayed in the component of the questions.
Each one will contain: question, options, selected, answer */
const QuestionBox = ({question, options, selected}) => {
    const [answer, setAnswer] = useState(options);
    return (
    <div className="questionBox">
        <div className="question">{question}</div>
        {answer.map((text, index) => (
           <button 
             key={index}
             className="answerBtn"
             onClick={() => {
             setAnswer([text]);
             selected(text);
             }}
           >
             {text}
            </button>
        ))}
        </div>
    );
};

export default QuestionBox;