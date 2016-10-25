const React = require('react')
const MessageLine = require('./MessageLine')
const { Link } = require('react-router')

// Redux
const Store = require('./Store')
const { connector } = Store


class ChatPage extends React.Component {
	constructor (props) {
		super(props)

		this.handleMessageChange = this.handleMessageChange.bind(this)
		this.addMessage = this.addMessage.bind(this)
	}

	handleMessageChange (event) {
		this.props.handleMessageChange(event.target.value)
	}

	addMessage (event) {
		this.props.addMessage({"messageContent": this.props.typedMessage,"user": this.props.loggedUser})
		event.preventDefault()
	}

	render () {
		return (
			<div className='container'>
				<Link to='/'> Back </Link>
  				<h1>Chat Here!!</h1>
  				<h3>Logged in as {this.props.loggedUser}.</h3>
    			<div className='messages'>
      				{this.props.messages.map((message, index) => (
        				<MessageLine {...message} key={index} />
      				))}
    			</div>
    			<form onSubmit={this.addMessage}>
    			  <input className='search' type='text' placeholder='Your Message Here' value={this.props.typedMessage} onChange={this.handleMessageChange} />
    			</form>
  			</div>
			)
	}
}

ChatPage.propTypes = {
  messages: React.PropTypes.arrayOf(React.PropTypes.object)
}

module.exports = connector(ChatPage)
