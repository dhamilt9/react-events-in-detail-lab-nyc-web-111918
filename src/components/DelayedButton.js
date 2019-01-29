// Code DelayedButton Component Here
import React, { Component } from 'react'

export default class DelayedButton extends Component{
  constructor(){
    super()
  }
  clickHandler = (event) => {
    event.persist()
    setTimeout(() =>
      {
        // console.log(event)
        this.props.onDelayedClick(event)
      }, this.props.delay
    )
  }
  render(){
    return (
      <form>
        <button onClick={this.clickHandler} type="button"></button>
      </form>
    )
  }
}
