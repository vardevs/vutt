'use strict';

var React = require('react'),
    ActionCreator = require('../actions/DataActionCreators'),
    ThreadList = require('./ThreadList.jsx'),
    DataStore = require('../stores/DataStore');

var Thread = React.createClass({
  displayName: 'Thread',

  getDefaultProps: function getDefaultProps() {
    return {
      thread: {},
      active: {},
      prefix: ''
    };
  },

  componentDidMount: function componentDidMount() {},

  _onClick: function _onClick() {
    ActionCreator.select(this.props.thread);
  },

  process: function process() {
    return this.props.thread == this.props.active ? 'active-thread' : '';
  },

  render: function render() {
    var _this = this;

    var children = [];
    if (this.props.thread.children) {
      children = this.props.thread.children.map(function (thread) {
        return React.createElement(Thread, { thread: thread, active: _this.props.active, prefix: '  └>' });
      });
    }
    var title = this.props.prefix || this.props.thread.subject;
    return React.createElement(
      'li',
      null,
      React.createElement(
        'div',
        { onClick: this._onClick, className: this.process() },
        React.createElement(
          'span',
          { className: 'align-right text-after' },
          this.props.thread.id
        ),
        React.createElement(
          'span',
          { className: 'text-after' },
          this.props.thread.date.toUTCString()
        ),
        React.createElement(
          'span',
          { className: 'text-after' },
          this.props.thread.from
        ),
        React.createElement(
          'span',
          { className: 'text-after' },
          title
        )
      ),
      React.createElement(
        'ul',
        null,
        children
      )
    );
  }
});

module.exports = Thread;