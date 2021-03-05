import React from "react";
import { Container } from "react-bootstrap";
import styles from "../CSS/quizofilo.module.css"

class ReviewAnswer extends React.Component {
  renderAnswers = () => {
    return Object.keys(this.props.submissionData).map((index) => {
      return (
        <Container className={styles.Attempted}>
          <strong>
            A{parseInt(index) + 1}.
          </strong>
          {' '} {this.props.submissionData[index]}
        </Container>
      );
    });
  };

  render() {
    return (
      <Container className = {styles.ReviewAnswer}>
        <h6 className = {styles.Title}>
          Review Answers Here
        </h6>
        {this.renderAnswers()}
      </Container>
    );
  }
}

export default ReviewAnswer;