import React, { Component } from 'react'
import { render } from 'react-dom'

import Quiz from '../../components/Quiz/Quiz.js'
import * as helpers from '../../../app/helpers/helpers.js'

export default class App extends Component{
  constructor(props) {
    super(props)
    this.defaultState = {
      quizzes: null,
    }

    this.state = this.defaultState
    this.saveQuizzesToState = this.saveQuizzesToState.bind(this)
  }

  componentWillMount(){
    helpers.getAllQuizzes(this.saveQuizzesToState)
    // helpers.getAQuiz(1)
    // helpers.addAQuestion(1, helpers.sampleQuestion)
    // helpers.returnAnsweredQuestion(1, helpers.sampleQuestion, helpers.sampleAnswer)
    // helpers.postFinalScore(helpers.sampleFinalScore)
    // helpers.deleteAQuestion(1, 1478253351170)

  }

  saveQuizzesToState (response) {
    this.setState({quizzes: response.quizzes})
    this.setState({quiz: response.quizzes.map(quiz =>
    Object.assign({}, quiz))})
    this.setState({questions: this.state.quiz.map(quiz => quiz.questions)})
  }

  render() {
    let quizzes = this.state.quizzes

    quizzes = quizzes !== null ?
      quizzes.map(quiz => <Quiz quiz={quiz} key={quiz.id}/>)
      : ''

    return (
      <section>
        {quizzes}
      </section>
    )
  }
}
