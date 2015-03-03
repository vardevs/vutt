var React = require('react'),
    ActionCreator = require('../actions/DataActionCreators'),
    ThreadList = require('./ThreadList.jsx'),
    DataStore = require('../stores/DataStore');

var Thread = React.createClass({
  getDefaultProps: function() {
    return {
      thread: {},
      active: {}
    };
  },

  componentDidMount: function() {
  },

  _onClick: function () {
    ActionCreator.select(this.props.thread);
  },

  process: function () {
    return this.props.thread == this.props.active ? 'active-thread' : '';
  },

  render: function() {
    return (
      <li onClick={this._onClick} className={this.process()}>
        <span className="align-right text-after">{this.props.thread.id}</span>
        <span className="text-after">{this.props.thread.date.toUTCString()}</span>
        <span className="text-after">{this.props.thread.from}</span>
        <span className="text-after">{this.props.thread.subject}</span>
      </li>
    );
  }
});

module.exports = Thread;
