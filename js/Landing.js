const React = require('react')
const ReactRouter = require('react-router')
const { Link } = ReactRouter

const Landing = () => (
  <div className='app-container'>
    <div className='home-info'>
      <h1 className='title'>Chat Home</h1>
      <input className='search' type='text' placeholder='Username' />
      <Link to='/chat' className='browse-all'> or just watch </Link>
    </div>
  </div>
)

module.exports = Landing