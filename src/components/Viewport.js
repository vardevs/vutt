import React, { Component, PropTypes } from 'react'

export default class Viewport extends Component {
  render() {
    return (
      <div>
        <div className="meta">
          <p>Date: {date.toUTCString()}</p>
          <p>From: {this.props.email.from}</p>
          <p>To: {this.props.email.to}</p>
          <p>Subject: {this.props.email.subject}</p>
        </div>
        <p><pre>{this.props.email.body}</pre></p>
        <footer>
        <p>
        <span className="text-after">-</span>
        <span className="text-after">-</span>
        <span className="text-after">{this.props.email.from}</span>
        <span className="text-after">{this.props.email.subject}</span>
        </p>
        </footer>
      </div>
    )
  }
}

Viewport.propTypes = {
  showEmail: {
    id: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired
  }
}
