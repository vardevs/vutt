import React, { Component, PropTypes } from 'react'

export default class Email extends Component {
  render() {
    return (
      <li
        onClick={this.props.onClick}>
        <span className="align-right text-after">{this.props.id}</span>
        <span className="text-after">{this.props.date.toUTCString()}</span>
        <span className="text-after">{this.props.from}</span>
        <span className="text-after">{this.props.subject}</span>
      </li>
    )
  }
}

Email.propTypes = {
  onClick: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
	body: PropTypes.string.isRequired,
	from: PropTypes.string.isRequired,
	to: PropTypes.string.isRequired,
	subject: PropTypes.string.isRequired
}
