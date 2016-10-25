const React = require('react')
const MessageLine = require('./MessageLine')
const data = require('../public/data')

class ChatPage extends React.Component {
	constructor (props) {
		super(props)

		this.state = {
			loggedUser: (this.props.params.user || ''),
			typedMessage: ''
		}

		this.handleMessageChange = this.handleMessageChange.bind(this)
	}

	handleMessageChange (event) {
		this.setState({ typedMessage: event.target.value })
	}

	render () {
		return (
			<div className='container'>
  				<h1>Chat Here!!</h1>
  				<h3>Logged in as {this.state.loggedUser}.</h3>
    			<div className='messages'>
      				{data.messages.map((message, index) => (
        				<MessageLine {...message} key={index} />
      				))}
    			</div>
    			  <input className='search' type='text' placeholder='Your Message Here' value={this.state.typedMessage} onChange={this.handleMessageChange} />
  			</div>
			)
	}
}

module.exports = ChatPage