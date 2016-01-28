import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { openEmail } from '../actions'
import EmailList from '../components/EmailList'
import Viewport from '../components/viewport'

class App extends Component {
  render() {
    // Injected by connect() call:
    const { dispatch, emails, email } = this.props
    return (
      <div>
				<header>
					<p>
						<span className="text-after">q:Quit</span>
						<span className="text-after">d:Del</span>
						<span className="text-after">u:Undel</span>
						<span className="text-after">s:Save</span>
						<span className="text-after">r:Reply</span>
						<span className="text-after">g:Group</span>
						<span className="text-after">?:Help</span>
					</p>
				</header>

        <EmailList
          emails={visibleEmails}
          onEmailClick={id =>
            dispatch(openEmail(id))
          } />

        <Viewport
          email={showEmail}/>
      </div>
    )
  }
}

App.propTypes = {
 	emails: PropTypes.arrayOf(PropTypes.shape({
    body: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired,
    active: PropTypes.boolean.isRequired
  }).isRequired).isRequired,
	email: PropTypes.shape({
    body: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    subject: PropTypes.string.isRequired,
    active: PropTypes.boolean.isRequired
  })
}

function selectEmails(emails) {
	return emails
}

function selectEmail(email) {
	return email
}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
  return {
    visibleEmails: selectEmails(state.emails),
		openEmail: selectEmail(state.email)
  }
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(App)
