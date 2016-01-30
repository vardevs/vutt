import { combineReducers } from 'redux'
import { ACTIVATE_EMAIL, SHOW_EMAIL } from './actions'

const initialState = [
  {
		active: true,
    id: 1,
    date: new Date(2015, 3, 3, 13, 52, 0, 0),
    from: 'viktor@vardevs.se',
    to: 'you@you.com',
    subject: 'About vardevs',
    body: `Hello friend

Let me give you the short rundown of a small software development company
called vardevs. The Internet is a wonderful place. vardevs helps you make
the most of it. :-)

  Software Development
  --------------------

  TL;DR Experienced software engineer with a knack for Front-End and
        Back-End web development.

        Portfolio centers around web design and development using technologies
        and tools such as: HTML, CSS, Javascript, Java, Python, Photoshop

        Experience as Team Lead with a Lean Software Development (LSD)
        approach.

  Operations
  ----------

  - Hosted solutions for Web
  - Hosted solutions for e-mail
  - CDN: Content delivery networks
  - DNS: Domain name management (order/renewal/transfer)
  - VPS: Virtual private servers

A more exhaustive CV complete with buzzwords should be in your inbox. ;-)

If you need anything, you can always reach me viktor@vardevs.se.

/v.
`
  },
  {
		active: false,
    id: 2,
    date: new Date(2015, 3, 3, 18, 0, 0, 0),
    from: 'viktor@vardevs.se',
    to: 'you@you.com',
    subject: 'Curriculum Vitae',
    body: `Hi

Just thought I would drop you a link to my CV:

  https://github.com/varl/cv
  https://no.linkedin.com/in/viktorvarland

/v.
`
  },
  {
		active: false,
    id: 3,
    date: new Date(2015, 3, 3, 12, 52, 0, 0),
    from: 'asdu281@yahoo.com',
    to: 'you@you.com',
    subject: '[SPAM] FW: Rich man',
    body: `Compliments to you Rick Man!

Very much congratulations! You have lottery ticket winning 10'000'000 EUR!`
  }
]

function emails(state = initialState, action) {
  switch (action.type) {

    case ACTIVATE_EMAIL:
      return state.map(email =>
          email.id === action.id ?
            Object.assign({}, email, { active: true }) :
            Object.assign({}, email, { active: false})
      )

    default:
      return state

  }
}

const vuttApp = combineReducers({
  emails
})

export default vuttApp
