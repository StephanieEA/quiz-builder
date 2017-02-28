import React from 'react'

import Answer from '../../components/Answer/Answer.js'


export default class Question extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    let question = this.props.question
    let answers = question.answers

    answers = answers.map(answer =>
      <Answer
        answer={answer} 
        key={answer.score}
        chosen={this.props.chosen} handleInput={this.props.handleInput} name={question.title}/>)


    return (
      <article key={question.id}>
        <label>{question.title}</label>
        {answers}
      </article>
    )
  }
}
