import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { activateEmail } from '../actions'
import EmailList from '../components/EmailList'
import Viewport from '../components/Viewport'

class App extends Component {
  render() {
    // Injected by connect() call:
    const { dispatch, emails } = this.props
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
          emails={emails}
          onEmailClick={id =>
            dispatch(activateEmail(id))
          } />

        <Viewport
          emails={emails}/>
      </div>
    )
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
 	emails: PropTypes.arrayOf(PropTypes.shape({
    body: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date),
    subject: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired
  }).isRequired).isRequired
}

// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.
function select(state) {
  return state
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(App)
