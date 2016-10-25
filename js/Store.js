const redux = require('redux')
const reactRedux = require('react-redux')

const SET_USER = 'setUser'
const ADD_MESSAGE = 'addMessage'
const HANDLE_MESSAGE_CHANGE = 'handleMessageChange'
const data = require('../public/data')

const reducer = (state = {loggedUser: '', typedMessage: '', messages: data.messages}, action) => {
  switch (action.type) {
    case SET_USER:
      const newState0 = {}
      Object.assign(newState0, state, {loggedUser: action.value})
      return newState0
    case ADD_MESSAGE:
      const newState1 = {}
      Object.assign(newState1, state, {messages: state.messages.concat(action.value), typedMessage:''})
      return newState1
    case HANDLE_MESSAGE_CHANGE:
      const newState2 = {}
      Object.assign(newState2, state, {typedMessage: action.value})
      return newState2
    default:
      return state
  }
}

const store = redux.createStore(reducer)

const mapStateToProps = (state) => ({ loggedUser: state.loggedUser, typedMessage: state.typedMessage, messages: state.messages })
const mapDispatchToProps = (dispatch) => {
  return {
    setUser: (user) => {
      dispatch({type: SET_USER, value: user})
    },
    addMessage: (message) => {
      dispatch({type: ADD_MESSAGE, value: message})
    },
    handleMessageChange: (messageContent) => {
      dispatch({type: HANDLE_MESSAGE_CHANGE, value: messageContent})
    }
  }
}

const connector = reactRedux.connect(mapStateToProps, mapDispatchToProps)

module.exports = { connector, store }
