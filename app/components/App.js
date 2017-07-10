import React from 'react'
import Nav from './Nav'
import MessagesList from './messages/MessagesList'

class App extends React.Component {

  constructor(){
    super()
  }

  render() {
    return (
      <div className="container">
        <Nav isAuthenticated = { this.isAuthenticated} user={ this.user }/>
        <MessagesList/>
        {this.props.children}
      </div>
    )
  }
}

export default App
