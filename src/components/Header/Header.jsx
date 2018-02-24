import React, { Component } from 'react'
import './Header.css'


class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: 'Express + Node.js'
    }
  }

  render() {
    return (
      <div className='Header'>
        <h1>{this.props.nth} { this.state.msg }</h1>
      </div>
    )
  }
}

export default Header
