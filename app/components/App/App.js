import React, { Component } from 'react'
import { render } from 'react-dom'

export default class App extends Component{
  constructor() {
    super()
    this.defaultState = {
      quiz: ''
    }
    this.state = this.defaultState
  }

  render() {
    return (
      <section>
        yo
      </section>
    )
  }
}
