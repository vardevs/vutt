'use strict';

var React = require('react');

var hasOwnProperty = Object.prototype.hasOwnProperty;

function isEmpty(obj) {
  if (obj == null) return true;
  if (obj.length > 0) return false;
  if (obj.length === 0) return true;
  for (var key in obj) {
    if (hasOwnProperty.call(obj, key)) return false;
  }
  return true;
}

var Viewport = React.createClass({
  displayName: 'Viewport',

  getDefaultProps: function getDefaultProps() {
    return {
      thread: {}
    };
  },

  render: function render() {
    var hidden = isEmpty(this.props.thread) ? 'hidden viewport' : 'viewport';
    var date = this.props.thread.date || new Date();
    return React.createElement(
      'div',
      { className: hidden },
      React.createElement(
        'div',
        { className: 'meta' },
        React.createElement(
          'p',
          null,
          'Date: ',
          date.toUTCString()
        ),
        React.createElement(
          'p',
          null,
          'From: ',
          this.props.thread.from
        ),
        React.createElement(
          'p',
          null,
          'To: ',
          this.props.thread.to
        ),
        React.createElement(
          'p',
          null,
          'Subject: ',
          this.props.thread.subject
        )
      ),
      React.createElement(
        'p',
        null,
        React.createElement(
          'pre',
          null,
          this.props.thread.body
        )
      ),
      React.createElement(
        'footer',
        null,
        React.createElement(
          'p',
          null,
          React.createElement(
            'span',
            { className: 'text-after' },
            '-'
          ),
          React.createElement(
            'span',
            { className: 'text-after' },
            '-'
          ),
          React.createElement(
            'span',
            { className: 'text-after' },
            this.props.thread.from
          ),
          React.createElement(
            'span',
            null,
            this.props.thread.subject
          )
        )
      )
    );
  }
});

module.exports = Viewport;