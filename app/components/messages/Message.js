import React from 'react'
import classnames from 'classnames'

class Message extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { type, text } = this.props.message
    return (
      <div className={classnames('alert', {
        'alert-success': type === 'success',
        'alert-danger': type === 'error'
      })}>
        {text}
      </div>
    )
  }
}

Message.propTypes = {
  message: React.PropTypes.object.isRequired
}

export default Message;
