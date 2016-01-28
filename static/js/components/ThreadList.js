'use strict';

var React = require('react'),
    ActionCreator = require('../actions/DataActionCreators'),
    Keymaster = require('keymaster'),
    Thread = require('./Thread.jsx');

function isEmpty(obj) {
  if (obj == null) return true;
  if (obj.length > 0) return false;
  if (obj.length === 0) return true;
  for (var key in obj) {
    if (hasOwnProperty.call(obj, key)) return false;
  }
  return true;
}

function selectId(coll, id) {
  var elem = coll.find(function (x) {
    return x.id === id;
  });

  if (!elem) {
    for (var c in coll) {
      var current = coll[c];

      if (current.id === id) {
        elem = current;
      } else if (current.children) {
        return selectId(current.children, id);
      }
    }
  }

  return elem;
}

var ThreadList = React.createClass({
  displayName: 'ThreadList',

  getDefaultProps: function getDefaultProps() {
    return {
      threads: [],
      active: {}
    };
  },

  componentDidMount: function componentDidMount() {
    Keymaster('j, k', this._changeSelection);
    Keymaster('r', this._openReply);
  },

  componentWillUnmount: function componentWillUnmount() {
    Keymaster.unbind('j, k', this._changeSelection);
    Keymaster.unbind('r', this._openReply);
  },

  _openReply: function _openReply(e) {
    alert(this.props.active.from);
  },

  _changeSelection: function _changeSelection(e) {
    e.preventDefault();
    var newThread = undefined;
    var currentId = undefined;

    switch (e.keyCode) {
      case 74:
        currentId = !isEmpty(this.props.active) ? this.props.active.id : 0;
        newThread = selectId(this.props.threads, currentId + 1);
        break;
      case 75:
        currentId = !isEmpty(this.props.active) ? this.props.active.id : 0;
        newThread = selectId(this.props.threads, currentId - 1);
        break;
      default:
        break;
    }
    if (newThread) {
      ActionCreator.select(newThread);
    }
  },

  render: function render() {
    var _this = this;

    return React.createElement(
      'div',
      { className: 'thread-list', onKeyPress: this._onKeyDown },
      React.createElement(
        'ul',
        null,
        this.props.threads.map(function (thread) {
          return React.createElement(Thread, { thread: thread, active: _this.props.active });
        })
      ),
      React.createElement(
        'footer',
        null,
        React.createElement(
          'p',
          null,
          React.createElement(
            'span',
            { className: '' },
            '---vutt: =Inbox [Msgs:',
            this.props.threads.length,
            ']---(threads)---'
          )
        )
      )
    );
  }
});

module.exports = ThreadList;