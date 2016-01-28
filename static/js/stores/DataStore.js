'use strict';

var AppDispatcher = require('../dispatchers/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var Constants = require('../constants/AppConstants');
var assign = require('object-assign');

// data storage
var _data = [{
  id: 1,
  date: new Date(2015, 3, 3, 13, 52, 0, 0),
  from: 'viktor@vardevs.se',
  to: 'you@you.com',
  subject: 'About vardevs',
  body: 'Hey friend\n\nLet me give you the short rundown of a small software development company\ncalled «vardevs».\n\n- Freelance\n  ---------\n  Available for work on a per project basis.\n\n  TL;DR Experienced software engineer with a knack for Front-End and \n        Back-End web development.\n\n        Portfolio centers around web design and development using:\n        HTML, CSS, Javascript, Java, Python.\n\n  A more exhaustive CV complete with buzzwords should be in your inbox. ;-)\n\n- Operations\n  ----------\n  Provides end-to-end care for your solutions.\n\n  - VPS: Virtual private servers\n  - Web-hosting\n  - Hosted Zimbra/Outlook e-mail\n  - DNS: Domain name management (order/renewal/transfer)\n  - CDN: Content delivery networks\n\nJust hit \'r\' or click on \'r:Reply\' at the top to get in touch!\n\n/v.\n',
  children: [{
    id: 2,
    date: new Date(2015, 3, 3, 18, 0, 0, 0),
    from: 'viktor@vardevs.se',
    to: 'You',
    subject: 'Curriculum Vitae',
    body: 'Hi\n\nJust thought I would drop you a link to my CV: \n\n  https://github.com/varl/cv\n\n/v.\n    '
  }]
}, {
  id: 3,
  date: new Date(2015, 3, 3, 12, 52, 0, 0),
  from: 'asdu281@yahoo.com',
  to: 'You',
  subject: '[SPAM] FW: rich man',
  body: 'compliments to you rick man!\n\nvery much congratulations! You have lottery ticket winning 10\'000\'000 EUR!'
}, {
  id: 4,
  date: new Date(2015, 0, 1, 1, 0, 0, 0),
  from: 'vuttadm@localhost',
  to: 'You',
  subject: '[README] Getting started with "vutt"',
  body: 'vutt - a mail client on the web\n\nRead\n----\nClick on any e-mail in the list to open it.\n\nYou can also use the keys \'up/down\' or \'j/k\' to move the current selection up\nand down, respectively.\n\nReply\n-----\nWhen an e-mail is open press \'r\' to reply to it.\n\nDelete \n------\nTo remove an e-mail from the inbox press \'d\' when it is selected.\n    '
}];

var _selected = {};

// add private functions to modify data
function addContent(subject, body) {
  var completed = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];

  _data.push({ subject: subject, body: body, completed: completed });
}

function selectThread(selected) {
  _selected = selected;
}

// Facebook style store creation.
var DataStore = assign({}, EventEmitter.prototype, {

  // public methods used by Controller-View to operate on data
  getAll: function getAll() {
    return {
      threads: _data,
      thread: _selected
    };
  },

  // Allow Controller-View to register itself with store
  addChangeListener: function addChangeListener(callback) {
    this.on(Constants.CHANGE_EVENT, callback);
  },
  removeChangeListener: function removeChangeListener(callback) {
    this.removeListener(Constants.CHANGE_EVENT, callback);
  },
  // triggers change listener above, firing controller-view callback
  emitChange: function emitChange() {
    this.emit(Constants.CHANGE_EVENT);
  },

  // register store with dispatcher, allowing actions to flow through
  dispatcherIndex: AppDispatcher.register(function (payload) {
    var action = payload.action;

    switch (action.type) {
      case Constants.ActionTypes.SELECT:
        var thread = action.thread;
        // NOTE: if this action needs to wait on another store:
        // AppDispatcher.waitFor([OtherStore.dispatchToken]);
        // For details, see: http://facebook.github.io/react/blog/2014/07/30/flux-actions-and-the-dispatcher.html#why-we-need-a-dispatcher
        if (thread !== '') {
          selectThread(thread);
          DataStore.emitChange();
        }
        break;

      // add more cases for other actionTypes...
    }
  })

});

module.exports = DataStore;