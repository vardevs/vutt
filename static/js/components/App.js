'use strict';

var React = require('react');
var DataStore = require('../stores/DataStore');
var ActionCreator = require('../actions/DataActionCreators');
var ThreadList = require('./ThreadList.jsx');
var Viewport = require('./Viewport.jsx');

var App = React.createClass({
  displayName: 'App',

  getInitialState: function getInitialState() {
    var data = DataStore.getAll();
    console.log(data);
    return {
      threads: data.threads,
      thread: data.thread
    };
  },

  _onChange: function _onChange() {
    var data = DataStore.getAll();
    this.setState({
      threads: data.threads,
      thread: data.thread
    });
  },

  componentDidMount: function componentDidMount() {
    DataStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function componentWillUnmount() {
    DataStore.removeChangeListener(this._onChange);
  },

  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'header',
        null,
        React.createElement(
          'p',
          null,
          React.createElement(
            'span',
            { className: 'text-after' },
            'q:Quit'
          ),
          React.createElement(
            'span',
            { className: 'text-after' },
            'd:Del'
          ),
          React.createElement(
            'span',
            { className: 'text-after' },
            'u:Undel'
          ),
          React.createElement(
            'span',
            { className: 'text-after' },
            's:Save'
          ),
          React.createElement(
            'span',
            { className: 'text-after' },
            'r:Reply'
          ),
          React.createElement(
            'span',
            { className: 'text-after' },
            'g:Group'
          ),
          React.createElement(
            'span',
            { className: 'text-after' },
            '?:Help'
          )
        )
      ),
      React.createElement(ThreadList, { threads: this.state.threads, active: this.state.thread }),
      React.createElement(Viewport, { thread: this.state.thread })
    );
  }

});

module.exports = App;