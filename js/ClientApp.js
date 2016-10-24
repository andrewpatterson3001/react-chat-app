const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
const ChatPage = require('./ChatPage')
const ReactRouter = require('react-router')
const { Router, Route, hashHistory } = ReactRouter

const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Landing} />
    <Route path='/chat' component={ChatPage} />
  </Router>
)

ReactDOM.render(<App/>, document.getElementById('app'))