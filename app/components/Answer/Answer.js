import React from 'react'

import Input from '../../components/input/input.js'

export default class Answer extends React.Component{
  constructor(props) {
    super(props)
  }

  render() {
    const {answer, name, chosen} = this.props

    return (
      <p>
        <Input type='radio'
          name={name}
          value={answer.score}
          checked={chosen[name] == answer.score}
          onChange={this.props.handleInput}/>
        {answer.title}
      </p>
    )
  }
}
