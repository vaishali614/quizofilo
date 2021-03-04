import React from "react";
import styles from "../CSS/quizofilo.module.css"

class ReviewSubmission extends React.Component {
  renderSubmissionDetails = () => {
    return Object.keys(this.props.submissionData).map((index) => {
      return (
        <div className={styles.Attempted}>
          <b>
            A{parseInt(index) + 1}.
          </b>
          {' '} {this.props.submissionData[index]}
        </div>
      );
    });
  };

  render() {
    return (
      <div className = {styles.ReviewSubmission}>
        <h6 className = {styles.Title}>
          Review Answers Here
        </h6>
        {this.renderSubmissionDetails()}
      </div>
    );
  }
}

export default ReviewSubmission;