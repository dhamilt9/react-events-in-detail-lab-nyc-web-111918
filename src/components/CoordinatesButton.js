import React, { Component } from 'react'

export default class CoordinatesButton extends Component{
  constructor(){
    super()
  }

  clickHandler = (event) => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY])
  }
  render(){
    return (
      <form>
        <button onClick={this.clickHandler} type="button"></button>
      </form>
    )
  }
}
