import React from 'react'
import Message from './Message'
import { connect } from 'react-redux'

class MessagesList extends React.Component {
  render() {
    const messages = this.props.messages.map(message =>
      <Message key={message.type} message={message} />
    );
    return (
      <div>{messages}</div>
    );
  }
}

MessagesList.propTypes = {
  messages: React.PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  }
}

export default connect(mapStateToProps)(MessagesList)
