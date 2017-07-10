import React from 'react'
import classnames from 'classnames'

class Message extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { id, type, text } = this.props.message
    return (
      <div className={classnames('alert', {
        'alert-success': type === 'success',
        'alert-danger': type === 'error'
      })}>
        <button type="button" className="close" onClick={this.onClick.bind(this)}><span>&times;</span></button>
        {text}
      </div>
    )
  }

  onClick(){
    this.props.deleteMessage(this.props.message.id)
  }

}

Message.propTypes = {
  message: React.PropTypes.object.isRequired,
  deleteMessage: React.PropTypes.object.isRequired
}

export default Message;
