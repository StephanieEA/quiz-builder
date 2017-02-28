import React from 'react'

import Input from '../../components/input/input.js'
import Question from '../../components/Question/Question.js'

export default class Quiz extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      chosen: {},
      score: 0,
    }
    this.handleInput = this.handleInput.bind(this)
    this.addScore= this.addScore.bind(this)
  }

  addScore(e) {
    e.preventDefault()
    debugger
    let chosen = this.state.chosen
    // get the associated score for every answer from props
    let answers = this.props.quiz.questions.map(question => question.answers)
    // answers is an array of arrays
    let answerKey = answers.reduce((acc, val) => acc.concat(val))
    // reduce that array to be an array of answer/score objects obj{score: 3, title: 'yo'}

    // find the object in anScore whose title has the same value as the value of a key in this.state.chosen

    // this is not the way let chosenAnswers = anScore.filter(obj => chosen[obj.title])

    // does the value of anScore.title match the key of an object in this.state.chosen
  //  let final = chosenAnswers.reduce((acc, val) => acc + val.score, 0)

    // if so add it to state score, or assign it to 0 and add it to state score
    this.setState({score: final})
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

  render() {
    let title = this.props.quiz.title
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
      </form>
    )
  }
}
