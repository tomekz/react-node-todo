import React from 'react'
import Nav from './Nav'
import Todos from './Todos'

class App extends React.Component {

  constructor(){
    super()
  }

  render() {
    return (
      <div className="container">
        <Nav/>
        {this.props.children}
      </div>
    )
  }
}

export default App
