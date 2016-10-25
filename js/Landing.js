const React = require('react')
const ReactRouter = require('react-router')
const { Link } = ReactRouter

class Landing extends React.Component {
	constructor (props) {
		super(props)

		this.state = {
			loggedUser: ''
		}

		this.handleUserChange = this.handleUserChange.bind(this)
	}

	handleUserChange (event) {
		this.setState({ loggedUser: event.target.value })
	}

	render () {
		return (
			<div className='app-container'>
    			<div className='home-info'>
      				<h1 className='title'>Chat Home</h1>
      				<input className='search' type='text' placeholder='Username' value={this.state.loggedUser} onChange={this.handleUserChange}/>
      				<Link to={'/chat/' + this.state.loggedUser} className='browse-all'> Log In </Link>
    			</div>
  			</div>
		)
	}
}

module.exports = Landing