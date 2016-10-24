const React = require('react')

const Landing = () => (
  <div className='app-container'>
    <div className='home-info'>
      <h1 className='title'>Chat Home</h1>
      <input className='search' type='text' placeholder='Username' />
      <a className='browse-all'>or watch chat</a>
    </div>
  </div>
)

module.exports = Landing