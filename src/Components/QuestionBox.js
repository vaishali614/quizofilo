import React, {Component} from "react";
import { Container } from "react-bootstrap";
import styles from "../CSS/quizofilo.module.css"

class QuestionBox extends Component {
  onChange = e => {
    this.props.updateSubmissionData(this.props.questionIndex, e);
  };

  getOptions = () => {
    const question = this.props.activeQuestion;
    return question.options.map((option) => {
      return (
        <label className = {styles.QuestionOption}>
          <input
            type = "radio"
            value = {option.value}
            checked = {this.props.selectedOption === option.value}
            onChange = {() => this.onChange(option.value)}
          />
          {option.placeholder}
        </label>
      );
    });
  };

  render() {
    return (
      <Container className = {styles.TitleOptions} >
        <div className = {styles.QuestionTitle}>
          Q{this.props.questionIndex + 1}. {this.props.activeQuestion.question}
        </div>
        {this.getOptions()}
      </Container>
    );
  }
}

export default QuestionBox;