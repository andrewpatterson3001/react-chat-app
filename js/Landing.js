const React = require('react')
const ReactRouter = require('react-router')
const { Link } = ReactRouter

// Redux
const Store = require('./Store')
const { connector } = Store

class Landing extends React.Component {
	constructor (props) {
		super(props)

		this.handleUserChange = this.handleUserChange.bind(this)
	}

	handleUserChange (event) {
		this.props.setUser(event.target.value)
	}

	render () {
		return (
			<div className='app-container'>
    			<div className='home-info'>
      				<h1 className='title'>Chat Home</h1>
      				<input className='search' type='text' placeholder='Username' value={this.props.loggedUser} onChange={this.handleUserChange}/>
      				<Link to={'/chat' + (this.props.loggedUser ? '/' + this.props.loggedUser : '')} className='browse-all'> Log In </Link>
    			</div>
  			</div>
		)
	}
}

module.exports = connector(Landing)