import React, {Component} from "react";
import styles from "../CSS/quizofilo.module.css"
import SubmittedImage from "../Assets/Submitted.png"
import { Button, Container, Image } from "react-bootstrap"

class Submission extends Component {
    render() {
        return (
            <Container className = {styles.Submission} >
                <h2>
                    <Image 
                        alt = {''} 
                        src = {SubmittedImage} 
                        className = {styles.Image} 
                        width = {200}
                    />
                </h2>
                <h2 className = {styles.SubmissionMessage}>
                    You have successfully submitted the Assessment
                </h2>
                <div className = {styles.SubmissionField}> 
                    <strong> Question Asked: </strong> 
                    {' '} {this.props.totalQuestionsCount}
                </div>
                <div className = {styles.SubmissionField}>
                    <strong> Question Correct: </strong>
                    {' '} {this.props.totalScore}
                </div>
                <div className = {styles.SubmissionField}> 
                    <strong> Your score: </strong> 
                    {' '} {((this.props.totalScore / this.props.totalQuestionsCount) * 100).toFixed(2)}
                </div>
                <a href = "/">
                    <Button className = {styles.RestartButton}> 
                        Restart Quiz 
                    </Button>
                </a>
            </Container>
        )
    }
}

export default Submission;