var React = require('react'),
    Thread = require('./Thread.jsx');

var ThreadList = React.createClass({
  getDefaultProps: function() {
    return {
      threads: [],
      active: {}
    };
  },

  render: function() {
    return (
      <div className="thread-list">
        <ul>
          {this.props.threads.map(thread =>
            <Thread thread={thread} active={this.props.active} />
          )}
        </ul>
        <footer>
          <p>
            <span className="">
              ---vardevs-mail: =Inbox [Msgs:{this.props.threads.length}]---(threads)---
            </span>
          </p>
        </footer>
      </div>
    );
  }
});

module.exports = ThreadList;
