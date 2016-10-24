const React = require('react')

const MessageLine = (props) => (
	<div className='singlemessageline'>
		<h3 className='message-user'>{props.user}</h3>
	    <p className='message-content'>{props.messageContent}</p>
  	</div>
)

MessageLine.propTypes = {
	user: React.PropTypes.string.isRequired,
	messageContent: React.PropTypes.string.isRequired
}

module.exports = MessageLine