const React = require('react')
const MessageInput = require('./MessageInput')
const MessageLine = require('./MessageLine')
const data = require('../public/data')

const ChatPage = () => (

  <div className='container'>
  	<h1>Chat Here!!</h1>
    <div className='messages'>
      {data.messages.map((message, index) => (
        <MessageLine {...message} key={index} />
      ))}
    </div>
    <MessageInput />
  </div>
)

module.exports = ChatPage