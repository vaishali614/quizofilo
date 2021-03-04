import React, {Component} from "react";
import styles from "../CSS/quizofilo.module.css"
import SubmittedImage from "../Assets/Submitted.png"

class Submission extends Component {
    render() {
        return (
            <div className = {styles.Submission} >
                <h2>
                    <img 
                        alt = {''} 
                        src = {SubmittedImage} 
                        className = {styles.Image} 
                        width = {200}
                    />
                </h2>
                <h2 className = {styles.SubmissionMessage}>
                    You have successfully submitted the Assessment
                </h2>
                <span className = {styles.SubmissionField}> 
                    <b> Question Asked: </b> 
                    {' '} {this.props.totalQuestionsCount}
                </span>
                <span className = {styles.SubmissionField}>
                    <b> Question Correct: </b>
                    {' '} {this.props.userScore}
                </span>
                <span className = {styles.SubmissionField}> 
                    <b> Your score: </b> 
                    {' '} {((this.props.userScore / this.props.totalQuestionsCount) * 100).toFixed(2)}
                </span>
            </div>
        )
    }
}

export default Submission;