import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./assets/style.css";
import quizService from "./quizService";
import QuestionBox from "./components/QuestionBox";
import Result from "./components/Result";

/* This folder will be responsible for the main component
here we will display all the functions that:
import the questions, check whether they are correct or not, and the "Play Again" button */
class QuizBee extends Component {
  state = {
    questionBank: [],
    score: 0,
    responses: 0
  };

  getQuestions = () => {
    quizService().then((question) => {
      this.setState({
        questionBank: question,
      });
    });
  };

  computeAnswer = (answer, correctAnswer) => {
    if (answer === correctAnswer) {
      this.setState({
        score: this.state.score + 1
      });
    }
    this.setState({
      responses: this.state.responses < 5 ? this.state.responses + 1 : 5
    })
  }

  playAgain = () => {
    this.getQuestions();
    this.setState({
      score: 0,
      responses: 0
    })
  }
  componentDidMount() {
      this.getQuestions();
  };
  render() {
    return (
      <div className="container">
        <div className="title">QuizBee</div>
        {this.state.questionBank.length > 0 &&
        this.state.responses < 5 &&
         this.state.questionBank.map(
    ({question, answers, correct, questionId}) => (
      <QuestionBox
       question={question}
        options={answers}
        key={questionId}
        selected={answer => this.computeAnswer(answer, correct)}
        />
      )
    )}

    {this.state.responses === 5 ? (
       <Result score={this.state.score} playAgain={this.playAgain} />
     ) : null}
      </div>
    );
  }
}

ReactDOM.render(<QuizBee />, document.getElementById("root"));
