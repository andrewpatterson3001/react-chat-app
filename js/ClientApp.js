const React = require('react')
const ReactDOM = require('react-dom')
const Landing = require('./Landing')
const ChatPage = require('./ChatPage')
const Layout = require('./Layout')
const ReactRouter = require('react-router')
const { Router, Route, hashHistory, IndexRoute } = ReactRouter

// Redux
const Store = require('./Store')
const { store } = Store
const reactRedux = require('react-redux')
const { Provider } = reactRedux

const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Landing} />
      <Route path='/chat/:user' component={ChatPage} />
    </Route>
  </Router>
)

ReactDOM.render(
  (
  <Provider store={store}>
    <App/>
  </Provider>
  ),
  document.getElementById('app')
)