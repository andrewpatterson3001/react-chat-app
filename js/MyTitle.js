const React = require('react')
const div = React.DOM.div
const h1 = React.DOM.h1

const MyTitle = React.createClass({
  render () {

  	//additional styling or assigning state to constants
  	const style = {color: this.props.color}


    return (
      <div>
        <h1 style={ style }>
          {this.props.title}
        </h1>
      </div>
    )
  }
})

module.exports = MyTitle