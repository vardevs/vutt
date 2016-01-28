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
							onClick={() => this.props.onEmailClick(email.id)} />
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
}

EmailList.propTypes = {
  onEmailClick: PropTypes.func.isRequired,
  emails: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired
  }).isRequired).isRequired
}
