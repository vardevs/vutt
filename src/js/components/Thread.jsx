var React = require('react'),
    ActionCreator = require('../actions/DataActionCreators'),
    ThreadList = require('./ThreadList.jsx'),
    DataStore = require('../stores/DataStore');

var Thread = React.createClass({
  getDefaultProps: function() {
    return {
      thread: {},
      active: {},
      prefix: ''
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
    var children = [];
    if (this.props.thread.children) {
      children = this.props.thread.children.map(thread =>
        <Thread thread={thread} active={this.props.active} prefix="  └>"/>
      );
    }
    var title = this.props.prefix || this.props.thread.subject;
    return (
      <li>
        <div onClick={this._onClick} className={this.process()}>
          <span className="align-right text-after">{this.props.thread.id}</span>
          <span className="text-after">{this.props.thread.date.toUTCString()}</span>
          <span className="text-after">{this.props.thread.from}</span>
          <span className="text-after">{title}</span>
        </div>

        <ul>
          {children}
        </ul>
      </li>
    );
  }
});

module.exports = Thread;
