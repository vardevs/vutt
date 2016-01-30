import React, { Component, PropTypes } from 'react'

export default class Viewport extends Component {
  render() {
    const email = this.props.emails.filter(email => email.active)[0] || { active: false }
    const hidden = !email.active ? "hidden" : ""
    return (
      <div className={hidden}>
        <div className="meta">
          <p>Date: {this.formatDate(email.date)}</p>
          <p>From: {email.from}</p>
          <p>To: {email.to}</p>
          <p>Subject: {email.subject}</p>
        </div>
        <pre>{email.body}</pre>
        <footer>
        <p>
        <span className="text-after">-</span>
        <span className="text-after">-</span>
        <span className="text-after">{email.from}</span>
        <span className="text-after">{email.subject}</span>
        </p>
        </footer>
      </div>
    )
  }

  formatDate(date) {
    return date ? date.toUTCString() : ""
  }
}

Viewport.propTypes = {
  emails: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    to: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired
  }).isRequired).isRequired
}
