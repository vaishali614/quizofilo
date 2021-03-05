import React, {Component} from "react";
import QuestionBox from "./QuestionBox";
import ReviewAnswer from "./ReviewAnswer";
import styles from "../CSS/quizofilo.module.css"
import { FaRegHandPointLeft, FaRegHandPointRight } from "react-icons/fa";
import { Button, Container, Jumbotron } from "react-bootstrap";

class Assessment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentQuestion: 0,
      submissionData: {},
    };
  }

  updateSubmissionData = (index, value) => {
    const submissionData = Object.assign({}, this.state.submissionData);
    submissionData[index] = value;
    this.setState({
      submissionData,
    });
  };

  onPreviousQuestion = () => {
    if (this.state.currentQuestion > 0) {
      this.setState({
        currentQuestion: this.state.currentQuestion - 1,
      });
    }
  };

  onNextQuestion = () => {
    if (this.state.currentQuestion < this.props.questions.length - 1) {
      this.setState({
        currentQuestion: this.state.currentQuestion + 1,
      });
    }
  };

  getFinalScore = () => {
    let score = 0;
    Object.keys(this.state.submissionData).map((questionIndex) => {
      const attemptedAnswer = this.state.submissionData[questionIndex];
      const expectedAnswer = this.props.questions[parseInt(questionIndex)].answer;

      if (expectedAnswer === attemptedAnswer) {
        score++;
      }

      return score;
    });
    return score;
  };

  onSubmit = () => {
    const score = this.getFinalScore();
    this.props.onSubmit(score);
  };

  renderHeader = () => {
    return (
      <Jumbotron>
        <Container className={styles.Header}>
          {this.state.currentQuestion > 0 && (
            <Button 
              className = {styles.Move}
              onClick = {this.onPreviousQuestion}
            >
              <FaRegHandPointLeft/>
            </Button>
          )}

          <h6 className = {styles.Title}>
            Attempt Questions Here
          </h6>

          {this.state.currentQuestion < this.props.questions.length - 1 && (
            <Button
              className = {styles.Move}
              onClick = {this.onNextQuestion}
            >
              <FaRegHandPointRight/>
            </Button>
          )}
        </Container>
      </Jumbotron>
    );
  };

  renderFooter = () => {
    const attemptedQuestions = Object.keys(this.state.submissionData);
    return attemptedQuestions.length === this.props.questions.length ? (
      <Button 
        className = {styles.SubmitButton} 
        onClick = {this.onSubmit}
      >
        Submit
      </Button>
    ) : null;
  };

  render() {
    return (
      <Container className = {styles.Assessment}>
        <ReviewAnswer
          submissionData = {this.state.submissionData}
          totalQuestionsCount = {this.props.questions.length}
        />
        <div className = {styles.Question}>
          {this.renderHeader()}

          <QuestionBox
            questionIndex = {this.state.currentQuestion}
            activeQuestion = {this.props.questions[this.state.currentQuestion]}
            updateSubmissionData = {this.updateSubmissionData}
            selectedOption = {
              this.state.submissionData[this.state.currentQuestion]
            }
          />
          
          {this.renderFooter()}
        </div>
      </Container>
    );
  }
}

export default Assessment;