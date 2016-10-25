const React = require('react')

// Redux
const Store = require('./Store')
const { connector } = Store


const Layout = (props) => (
  <div className='app-container'>
    {props.children}
  </div>
)

module.exports = connector(Layout)