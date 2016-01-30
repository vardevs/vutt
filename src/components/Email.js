import React, { Component, PropTypes } from 'react'

export default class Email extends Component {
  render() {
    return (
      <li className={this.props.active ? "thread-active" : ""}
        onClick={this.props.onClick}>
        <span className="align-right index text-after">{this.props.id}</span>
        <span className="from text-after">{this.props.from}</span>
        <span className="subject text-after">{this.props.subject}</span>
        <span className="date text-after">{this.props.date.toUTCString()}</span>
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
