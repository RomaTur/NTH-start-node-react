import React, { Component } from 'react'
import './App.css'
import Header from '../Header'

class App extends Component {
  constructor() {
    super()
    this.state = {
      nth: ''
    }
  }

  componentDidMount(){
    this.setState({
      nth: 'Start'
    })
  }

  render() {
    return (
      <div className='App'>
        <Header
          nth={this.state.nth}
        />
      </div>
    )
  }
}

export default App
