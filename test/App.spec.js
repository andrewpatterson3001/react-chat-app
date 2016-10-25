/* eslint-env mocha */

const { expect } = require('chai')
const React = require('react')
const Landing = require('../js/Landing')
const ChatPage = require('../js/ChatPage')
const { shallow, mount } = require('enzyme')
const { messages } = require('../public/data')

describe('<Landing />', () => {
	it('should render the title', () => {
		const wrapper = shallow(<Landing />)
		//console.log(wrapper.debug()) allows you to see the shallow rendering in the terminal
		expect(wrapper.contains(<h1 className='title'>Chat Home</h1>)).to.be.true
	})

	it('should update the state when a user enters his or her name', () => {
		const wrapper = mount(<Landing />)
		const input = wrapper.find('.search')
		input.node.value = 'testUser123'
		input.simulate('change')
		expect(wrapper.state('loggedUser')).to.equal('testUser123')
	})

}) 

describe('<ChatPage />', () => {
	xit('should render the user logged in message', () => {
		const wrapper = shallow(<ChatPage />)
		//console.log(wrapper.debug()) allows you to see the shallow rendering in the terminal
		expect(wrapper.contains(<h1 className='title'>Chat Home</h1>)).to.be.true
	})

	xit('should render the correct number of messages', () => {
		const wrapper = shallow(<ChatPage />)
		expect(wrapper.find(ChatPage).length).to.equal(messages.length)
	})
}) 