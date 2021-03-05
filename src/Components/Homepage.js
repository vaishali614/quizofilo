import React, { Component } from "react"
import Assessment from './Assessment'
import styles from "../CSS/quizofilo.module.css"
import Submission from "./Submission"
import questions from './QuestionsSet'
import { Container, Image, Button } from 'react-bootstrap'
import AssessmentImage from "../Assets/Assessment.jpg"

const DisplayPage = {
    Homepage: 'Homepage',
    Assessment: 'Assessment',
    Submission: 'Submission'
}

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions,
            currentView: DisplayPage.Homepage,
            totalScore: 0
        };
    }

    startAssessment = () => {
        this.setState({
            currentView: DisplayPage.Assessment
        })
    }

    submitAssessment = (score) => {
        this.setState({
            currentView: DisplayPage.Submission,
            totalScore: score
        })
    }

    renderAssessmentPage = () => {
        return (
            <Assessment 
                questions = {this.state.questions} 
                onSubmit = {this.submitAssessment}
            />
        )
    }

    renderSubmissionPage = () => {
        return (
            <Submission 
                totalQuestionsCount = {this.state.questions.length} 
                totalScore = {this.state.totalScore}
            />
        )
    }

    renderWelcomePage = () => {
        return (
            <Container className = {styles.WelcomePage}>
                <h2>
                    <Image 
                        alt = {''} 
                        src = {AssessmentImage} 
                        className = {styles.Image}
                    />
                </h2>
                <h2 className = {styles.Quizofilo}>
                    Quizofilo
                </h2>
                <Button 
                    className = {styles.StartButton} 
                    onClick = {this.startAssessment}
                >
                    Start
                </Button>
            </Container>
        )
    }

    render() {
        switch (this.state.currentView) {
            case DisplayPage.Assessment:
                return this.renderAssessmentPage();
            case DisplayPage.Submission:
                return this.renderSubmissionPage();
            default:
                return this.renderWelcomePage();
        }
    }
}

export default Homepage;