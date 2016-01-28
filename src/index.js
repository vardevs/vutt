import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import vuttApp from './reducers'

let emails = {"visibilityFilter": "SHOW_ALL", "emails": [
  {
		active: false,
    id: 1,
    date: new Date(2015, 3, 3, 13, 52, 0, 0),
    from: 'viktor@vardevs.se',
    to: 'you@you.com',
    subject: 'About vardevs',
    body: `Hey friend

Let me give you the short rundown of a small software development company
called «vardevs».

- Freelance
  ---------
  Available for work on a per project basis.

  TL;DR Experienced software engineer with a knack for Front-End and
        Back-End web development.

        Portfolio centers around web design and development using:
        HTML, CSS, Javascript, Java, Python.

  A more exhaustive CV complete with buzzwords should be in your inbox. ;-)

- Operations
  ----------
  Provides end-to-end care for your solutions.

  - VPS: Virtual private servers
  - Web-hosting
  - Hosted Zimbra/Outlook e-mail
  - DNS: Domain name management (order/renewal/transfer)
  - CDN: Content delivery networks

If you need anything, I am always available at «viktor@vardevs.se».

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
}

let store = createStore(vuttApp, emails)

let rootElement = document.getElementById('root')
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)
