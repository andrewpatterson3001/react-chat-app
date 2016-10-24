const React = require('react')

const MessageLine = (props) => (
	<div className='singlemessageline'>
		<h3 className='message-user'>{props.message.user}</h3>
	    <p className='message-content'>{props.message.messageContent}</p>
  	</div>
)

module.exports = MessageLine