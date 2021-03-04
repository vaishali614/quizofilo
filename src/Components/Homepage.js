import React, { Component } from "react"
import Assessment from './Assessment'
import styles from "../CSS/quizofilo.module.css"
import Submission from "./Submission"
import questions from './QuestionsSet'
import { Image } from 'react-bootstrap'
import AssessmentImage from "../Assets/Assessment.jpg"

const ViewType = {
    Welcome: 'Welcome',
    Assessment: 'Assessment',
    Submission: 'Submission'
}

class Homepage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            questions,
            currentView: ViewType.Welcome,
            userScore: 0
        };
    }

    startAssessment = () => {
        this.setState({
            currentView: ViewType.Assessment
        })
    }

    submitAssessment = (score) => {
        this.setState({
            currentView: ViewType.Submission,
            userScore: score
        })
    }

    renderAssessmentPage = () => {
        return (
            <Assessment 
                questions={this.state.questions} 
                onSubmit={this.submitAssessment}
            />
        )
    }

    renderSubmissionPage = () => {
        return (
            <Submission 
                totalQuestionsCount = {this.state.questions.length} 
                userScore={this.state.userScore}
            />
        )
    }

    renderWelcomePage = () => {
        return (
            <div className = {styles.WelcomePage}>
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
                <button 
                    className = {styles.StartButton} 
                    onClick = {this.startAssessment}
                >
                    Start
                </button>
            </div>
        )
    }

    render() {
        switch (this.state.currentView) {
        case ViewType.Assessment:
            return this.renderAssessmentPage();
        case ViewType.Submission:
            return this.renderSubmissionPage();
        default:
            return this.renderWelcomePage();
        }
    }
}

export default Homepage;