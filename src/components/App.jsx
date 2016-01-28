var React = require('react');
var DataStore = require('../stores/DataStore');
var ActionCreator = require('../actions/DataActionCreators');
var ThreadList = require('./ThreadList.jsx');
var Viewport = require('./Viewport.jsx');

var App = React.createClass({

  getInitialState: function() {
    var data = DataStore.getAll();
    console.log(data);
    return {
      threads: data.threads,
      thread: data.thread,
    }
  },

  _onChange: function() {
    var data = DataStore.getAll();
    this.setState({
      threads: data.threads,
      thread: data.thread
    });
  },

  componentDidMount: function() {
    DataStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    DataStore.removeChangeListener(this._onChange);
  },

  render: function() {
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

        <ThreadList threads={this.state.threads} active={this.state.thread} />
        <Viewport thread={this.state.thread} />
      </div>
    );
  }

});

module.exports = App;
