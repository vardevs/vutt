import React, { Component, PropTypes } from 'react'
import Email from './Email'

export default class EmailList extends Component {
  render() {
    return (
			<div className="thread-list">
				<ul>
					{this.props.emails.map(email =>
						<Email
							key={email.id}
							{...email}
							onClick={() => this.handleClick(email.id)} />
					)}
				</ul>
				<footer>
           <p>
             <span>
               ---vutt: =Inbox [Msgs:{this.props.emails.length}]---(threads)---
             </span>
           </p>
         </footer>
 			</div>
    )
  }

  handleClick(id) {
    this.props.onEmailClick(id)
  }
}

EmailList.propTypes = {
  onEmailClick: PropTypes.func.isRequired,
  emails: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    to: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired
  }).isRequired).isRequired
}
