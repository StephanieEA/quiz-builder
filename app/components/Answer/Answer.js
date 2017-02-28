import React from 'react'

import Input from '../../components/input/input.js'

export default class Answer extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    const answer = this.props.answer
    const name = this.props.name
    const chosen = this.props.chosen
    const title = answer.title

    return (
      <p>
        <Input type='radio'
          name={this.props.name}
          value={answer.title}
          checked={chosen[name] === answer.title} onChange={this.props.handleInput}/>
        {answer.title}{parseInt(answer.score)}
      </p>
    )
  }
}
