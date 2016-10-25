const React = require('react')
const MessageLine = require('./MessageLine')
const { Link } = require('react-router')

class ChatPage extends React.Component {
	constructor (props) {
		super(props)

		this.state = {
			loggedUser: (this.props.params.user || ''),
			typedMessage: '',
			messages: this.props.route.messages
		}

		this.handleMessageChange = this.handleMessageChange.bind(this)
		this.addMessage = this.addMessage.bind(this)
	}

	handleMessageChange (event) {
		this.setState({ typedMessage: event.target.value })
	}

	addMessage (event) {
		this.setState((prevState, props) => {
			return {messages: prevState.messages.concat({"messageContent":this.state.typedMessage, "user":this.state.loggedUser}), typedMessage: ''}
		})
	}

	render () {
		return (
			<div className='container'>
				<Link to='/'> Back </Link>
  				<h1>Chat Here!!</h1>
  				<h3>Logged in as {this.state.loggedUser}.</h3>
    			<div className='messages'>
      				{this.state.messages.map((message, index) => (
        				<MessageLine {...message} key={index} />
      				))}
    			</div>
    			<form onSubmit={this.addMessage}>
    			  <input className='search' type='text' placeholder='Your Message Here' value={this.state.typedMessage} onChange={this.handleMessageChange} />
    			</form>
  			</div>
			)
	}
}

ChatPage.propTypes = {
  messages: React.PropTypes.arrayOf(React.PropTypes.object)
}

module.exports = ChatPage