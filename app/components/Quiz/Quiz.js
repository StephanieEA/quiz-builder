import React from 'react'

import Input from '../../components/input/input.js'
import Question from '../../components/Question/Question.js'
import * as helpers from '../../../app/helpers/helpers.js'

export default class Quiz extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      chosen: {},
      score: 0,
      response: ''
    }
    this.handleInput = this.handleInput.bind(this)
    this.addScore = this.addScore.bind(this)
    this.saveScoreToState = this.saveScoreToState.bind(this)
  }


  handleInput(e) {
    const target = e.target
    const name = target.name
    const value = target.value
    const choosing = {[name]: value }
    const updatedChosen = Object.assign(this.state.chosen, choosing)

    this.setState({
      chosen: updatedChosen
    })
  }

  addScore(e) {
    e.preventDefault()
    const chosen = this.state.chosen

    const score = Object.keys(chosen).reduce((sum, key) => {
      sum += Number(chosen[key]);
      return sum;
    }, 0)

    helpers.postFinalScore(score, this.saveScoreToState)
  }

  saveScoreToState (response) {
    this.setState({response: response.score})
  }

  render() {
    const title = this.props.quiz.title
    const responseScore = this.state.response ? this.state.response : ''
    let questions = this.props.quiz.questions

    questions = questions.map(question =>
      <Question question={question}
        key={question.id}
        handleInput={this.handleInput}
        chosen={this.state.chosen}
    />)

    return (
      <form>
        <h2>{title}</h2>
        {questions}
        <input type='submit' onClick={this.addScore}/>
        <br/>
        {responseScore}
      </form>
    )
  }
}
