import React from 'react'
import Message from './Message'
import { connect } from 'react-redux'
import { deleteMessage } from '../../actions/messagesActions'

class MessagesList extends React.Component {
  render() {
    const messages = this.props.messages.map(message =>
      <Message key={message.id} message={message} deleteMessage={this.props.deleteMessage} />
    );
    return (
      <div>{messages}</div>
    );
  }
}

MessagesList.propTypes = {
  messages: React.PropTypes.array.isRequired,
  deleteMessage: React.PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    messages: state.messages
  }
}

export default connect(mapStateToProps, {deleteMessage})(MessagesList)
