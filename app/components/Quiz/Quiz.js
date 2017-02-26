import React from 'react'

export default class Quiz extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    let questions = this.props.quiz.questions
    questions = questions.map(question => {
      return <article key={question.id}>
        <input type='radio'/>
        <label>{question.title}</label>
      </article>
    })

    return (
      <form>
        <h2>{this.props.quiz.title}</h2>
        {questions}
        <input type='submit'/>
      </form>
    )
  }
}
